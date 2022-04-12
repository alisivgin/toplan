import { useState, useEffect, ReactElement } from 'react';
import {
  Modal,
  UnstyledButton,
  ActionIcon,
  AvatarsGroup,
  Avatar,
  Button,
  Select,
} from '@mantine/core';
import { createLocalVideoTrack, LocalVideoTrack, Room } from 'livekit-client';
import { VideoRenderer } from 'livekit-react';
import { Microphone, MicrophoneOff, Video, VideoOff } from 'tabler-icons-react';
import { ACTION_BUTTON_SIZE, ACTION_BUTTON_RADIUS } from './constants';
import useStyles from './PreJoinModal.style';
import { generateMediaInputOptions } from './PreJoinModal.utlils';

import { PreJoinModalProps, MediaInputOptions } from './PreJoinModal.d';

function PreJoinModal({ isOpen, onClose, onConnect }: PreJoinModalProps) {
  if (!isOpen) return null;
  const { classes, cx } = useStyles();

  const [videoEnabled, setVideoEnabled] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoTrack, setVideoTrack] = useState<LocalVideoTrack>();
  const [audioDevice, setAudioDevice] = useState<MediaInputOptions>();
  const [videoDevice, setVideoDevice] = useState<MediaInputOptions>();
  const [videoDevices, setVideoDevices] = useState<MediaInputOptions[]>([]);
  const [audioDevices, setAudioDevices] = useState<MediaInputOptions[]>([]);

  useEffect(() => {
    Room.getLocalDevices('videoinput').then(devices => {
      const videoDevices = generateMediaInputOptions(devices);
      setVideoDevices(videoDevices);
      setVideoDevice(videoDevices[0]);
    });
    Room.getLocalDevices('audioinput').then(devices => {
      const audioDevices = generateMediaInputOptions(devices);
      setAudioDevices(audioDevices);
      setAudioDevice(audioDevices[0]);
    });
  }, []);

  useEffect(() => {
    // enable video by default
    if (videoDevices.length === 0) return;
    createLocalVideoTrack({
      deviceId: videoDevice?.deviceId,
    }).then(track => {
      setVideoEnabled(true);
      setVideoTrack(track);
    });
  }, [videoDevice, videoDevices]);

  const toggleVideo = async () => {
    if (videoTrack) {
      videoTrack.stop();
      setVideoEnabled(false);
      setVideoTrack(undefined);
    } else {
      const track = await createLocalVideoTrack({
        deviceId: videoDevice?.deviceId,
      });
      setVideoEnabled(true);
      setVideoTrack(track);
    }
  };

  const toggleAudio = () => {
    if (audioEnabled) {
      setAudioEnabled(false);
    } else {
      setAudioEnabled(true);
    }
  };

  const selectVideoDevice = (deviceId: string) => {
    setVideoDevice(videoDevices.find(device => device.deviceId === deviceId));
    if (videoTrack) {
      if (videoTrack.mediaStreamTrack.getSettings().deviceId === deviceId) {
        return;
      }
      // stop video
      videoTrack.stop();
    }
  };

  const selectAudioDevice = (deviceId: string) => {
    setAudioDevice(audioDevices.find(device => device.deviceId === deviceId));
  };

  const connectToRoom = async () => {
    if (videoTrack) {
      videoTrack.stop();
    }

    const params: { [key: string]: string | boolean } = {
      videoEnabled,
      audioEnabled,
      simulcast: true,
      dynacast: true,
      adaptiveStream: true,
    };
    if (audioDevice) {
      params.audioDeviceId = audioDevice.deviceId;
    }
    if (videoDevice) {
      params.videoDeviceId = videoDevice.deviceId;
    } else if (videoTrack) {
      // pass along current device id to ensure camera device match
      const deviceId = await videoTrack.getDeviceId();
      if (deviceId) {
        params.videoDeviceId = deviceId;
      }
    }
    onConnect(params);
    onClose();
  };

  const handleOnClose = () => {
    if (videoTrack) {
      videoTrack.stop();
      setVideoEnabled(false);
      setVideoTrack(undefined);
    }
    onClose();
  };
  return (
    <Modal
      centered
      opened={isOpen}
      onClose={handleOnClose}
      classNames={{ modal: classes.modal }}
    >
      <main className={classes.videoContainer}>
        {videoTrack ? (
          <VideoRenderer className={classes.video} track={videoTrack} isLocal />
        ) : (
          <div className={cx(classes.video, classes.videoPlaceholder)}>
            No Camera
          </div>
        )}

        <div className={classes.actionButtons}>
          <UnstyledButton onClick={toggleAudio}>
            <ActionIcon
              variant={audioEnabled ? 'default' : 'filled'}
              size={ACTION_BUTTON_SIZE}
              radius={ACTION_BUTTON_RADIUS}
              color={audioEnabled ? '' : 'red'}
            >
              {audioEnabled ? <Microphone /> : <MicrophoneOff />}
            </ActionIcon>
          </UnstyledButton>
          <UnstyledButton onClick={toggleVideo}>
            <ActionIcon
              variant={videoEnabled ? 'default' : 'filled'}
              size={ACTION_BUTTON_SIZE}
              radius={ACTION_BUTTON_RADIUS}
              color={videoEnabled ? '' : 'red'}
            >
              {videoEnabled ? <Video /> : <VideoOff />}
            </ActionIcon>
          </UnstyledButton>
        </div>
      </main>
      <main className={classes.connect}>
        <div className={classes.avatarContainer}>
          <AvatarsGroup limit={2} total={4}>
            <Avatar />
            <Avatar />
          </AvatarsGroup>
          <span>are talking. Join them!</span>
        </div>
        <div className={classes.inputSourceContainer}>
          <Select
            label="Video Source"
            placeholder="Select video source"
            value={videoDevice?.deviceId}
            data={videoDevices}
            onChange={selectVideoDevice}
          />
          <Select
            label="Audio Source"
            placeholder="Select audio source"
            value={audioDevice?.deviceId}
            data={audioDevices}
            onChange={selectAudioDevice}
          />
        </div>
        <Button onClick={connectToRoom}>Connect</Button>
      </main>
    </Modal>
  );
}

export default PreJoinModal;
