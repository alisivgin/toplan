import { useEffect, useState } from 'react';
import {
  useRoom,
  useParticipant,
  RoomOptions,
  RoomState,
  VideoRenderer,
} from 'livekit-react';
import { ConnectOptions, LocalVideoTrack } from 'livekit-client';
import PreJoinModal from './PreJoinModal';
import { VideoCallProps } from './VideoCall.d';

import useStyles from './VideoCall.style';

function VideoCall(props: VideoCallProps) {
  const { classes } = useStyles();
  const [openPreJoin, setOpenPreJoin] = useState<boolean>(false);
  const [videoTrack, setVideoTrack] = useState<LocalVideoTrack>();
  const [videoDevice, setVideoDevice] = useState<MediaDeviceInfo>();
  const roomOptions: RoomOptions = {
    // adaptiveStream: true,
    // dynacast: true,
  };
  const {
    connect,
    isConnecting,
    room,
    error,
    participants,
    audioTracks,
  }: RoomState = useRoom(roomOptions);
  console.log({ participants });
  useEffect(() => {
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

    // teardown
    return () => {
      room?.disconnect();
    };
  }, []);
  return (
    <section className={classes.container}>
      <PreJoinModal
        isOpen={openPreJoin}
        onClose={() => setOpenPreJoin(false)}
      />
    </section>
  );
}

export default VideoCall;
