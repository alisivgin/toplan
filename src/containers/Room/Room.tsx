import { Grid } from '@mantine/core';
import VideoCall from 'components/VideoCall';
import RoomHeader from 'components/RoomHeader';
import { CameraProvider } from 'context/cameraContext';

interface RoomProps {}
function Room(props: RoomProps) {
  return (
    <>
      <CameraProvider>
        <RoomHeader />
        <Grid grow>
          <Grid.Col md={12} lg={6}>
            <VideoCall />
          </Grid.Col>
          <Grid.Col md={12} lg={6}>
            2
          </Grid.Col>
        </Grid>
      </CameraProvider>
    </>
  );
}

export default Room;
