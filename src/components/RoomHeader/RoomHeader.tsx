import { Grid, ActionIcon } from '@mantine/core';
import { Video } from 'tabler-icons-react';
import { useCamera } from 'context/cameraContext';
import useStyles from './RoomHeader.style';

function RoomHeader() {
  const { classes } = useStyles();
  const {
    state: { isOpen },
    dispatch,
  } = useCamera();

  return (
    <Grid grow className={classes.header}>
      <ActionIcon variant="hover" color="blue">
        <Video size={24} />
      </ActionIcon>
    </Grid>
  );
}

export default RoomHeader;
