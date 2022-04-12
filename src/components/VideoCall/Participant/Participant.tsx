import { Participant as ParticipantType } from 'livekit-client';
import { useParticipant, VideoRenderer } from 'livekit-react';

interface ParticipantProps {
  participant?: ParticipantType;
}
function Participant({ participant }: ParticipantProps) {
  if (!participant) return null;
  const { cameraPublication, isLocal } = useParticipant(participant);
  if (
    !cameraPublication ||
    !cameraPublication.isSubscribed ||
    !cameraPublication.track ||
    cameraPublication.isMuted
  ) {
    return null;
  }
  return (
    <VideoRenderer
      track={cameraPublication.track}
      isLocal={isLocal}
      objectFit="contain"
      width="100%"
      height="100%"
    />
  );
}

export default Participant;
