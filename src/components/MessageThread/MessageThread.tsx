import { Stack, Grid, Divider, Text } from '@mantine/core';
import Message from 'components/Message';

import useStyles from './MessageThread.style';

export default function WithAvatar() {
  const { classes } = useStyles();
  return (
    <>
      <Message makeVerticalLine />
      <Grid columns={16}>
        <Grid.Col
          span={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '0',
          }}
        >
          <Divider
            sx={() => ({
              width: '50%',
              marginLeft: '50%',
            })}
            size={2}
            orientation="vertical"
          />
        </Grid.Col>
        <Grid.Col span={14}>
          <Message />
          <Message />
        </Grid.Col>
      </Grid>
    </>
  );
}
