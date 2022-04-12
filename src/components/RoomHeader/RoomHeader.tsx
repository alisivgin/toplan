import { Grid, ActionIcon, UnstyledButton } from '@mantine/core';
import { Video } from 'tabler-icons-react';
import { useCamera } from 'context/cameraContext';
import useStyles from './RoomHeader.style';

function RoomHeader() {
  const { classes } = useStyles();
  const {
    state: { isPreJoinOpen },
    dispatch,
  } = useCamera();
  const onCameraClick = () => {
    dispatch({ type: 'open' });
  };
  return (
    <Grid grow className={classes.header}>
      <UnstyledButton onClick={onCameraClick}>
        <ActionIcon variant="hover" color="blue">
          <Video size={24} />
        </ActionIcon>
      </UnstyledButton>
    </Grid>
  );
}

export default RoomHeader;
