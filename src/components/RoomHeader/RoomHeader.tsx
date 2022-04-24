import { Grid, ActionIcon, UnstyledButton, Button } from '@mantine/core';
import { Video } from 'tabler-icons-react';
import { useCamera } from 'context/cameraContext';
import { signOut } from 'next-auth/react';
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
      <Button onClick={() => signOut()}>Sign out</Button>
    </Grid>
  );
}

export default RoomHeader;
