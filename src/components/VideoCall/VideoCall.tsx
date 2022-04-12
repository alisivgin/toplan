import { ReactNode, useEffect, useState } from 'react';
import {
  useRoom,
  useParticipant,
  RoomOptions,
  RoomState,
  VideoRenderer,
  AudioRenderer,
  LiveKitRoom,
} from 'livekit-react';
import { ConnectOptions, LocalVideoTrack } from 'livekit-client';
import { useCamera } from 'context/cameraContext';
import PreJoinModal from './PreJoinModal';
import Participant from './Participant';

import { VideoCallProps } from './VideoCall.d';
import useStyles from './VideoCall.style';

function VideoCall(props: VideoCallProps) {
  const { classes } = useStyles();
  const {
    state: { isPreJoinOpen },
    dispatch,
  } = useCamera();

  const [videoTrack, setVideoTrack] = useState<LocalVideoTrack>();
  const [videoDevice, setVideoDevice] = useState<MediaDeviceInfo>();
  const [roomOptions, setRoomOptions] = useState<RoomOptions>();
  const [enableCall, setEnableCall] = useState<boolean>(false);
  const {
    connect,
    isConnecting,
    room,
    error,
    participants,
    audioTracks,
  }: RoomState = useRoom(roomOptions);
  useEffect(() => {
    if (enableCall) {
      const options: ConnectOptions = {
        // automatically manage video quality
        autoManageVideo: true,
        // default publish settings
        publishDefaults: {
          simulcast: true,
        },
        // default capture settings
        // captureDefaults: {
        //   videoResolution: VideoPresets.hd.resolution,
        // },
      };
      connect(
        'ws://localhost:7880',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODU0MTIwMzQsImlzcyI6IkFQSU5VQlNpWU1aTm83RiIsImp0aSI6InRvbnlfc3RhcmsiLCJuYW1lIjoiVG9ueSBTdGFyayIsIm5iZiI6MTY0OTQxMjAzNCwic3ViIjoidG9ueV9zdGFyayIsInZpZGVvIjp7InJvb20iOiJzdGFyay10b3dlciIsInJvb21Kb2luIjp0cnVlfX0.qOSNjsu-AG0plJOI4e4wBUrE0znMme3ejH14e1cjuRg',
        options,
      ).then(async room => {
        // publish tracks
        await room?.localParticipant.setCameraEnabled(true);
        await room?.localParticipant.setMicrophoneEnabled(true);
      });
    }

    // teardown
    return () => {
      room?.disconnect();
    };
  }, [roomOptions, enableCall]);

  const handleOnConnect = (params: RoomOptions) => {
    setRoomOptions(params);
    setEnableCall(true);
  };
  return (
    <section className={classes.container}>
      <PreJoinModal
        isOpen={isPreJoinOpen}
        onClose={() => dispatch({ type: 'close' })}
        onConnect={handleOnConnect}
      />
      <Participant participant={room?.localParticipant} />
    </section>
  );
}

export default VideoCall;
