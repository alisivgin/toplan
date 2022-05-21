import { Avatar, Grid } from '@mantine/core';

import { WithAvatarProps } from './WithAvatar.d';

import useStyles from './WithAvatar.style';

export default function WithAvatar({ children, src }: WithAvatarProps) {
  const { classes } = useStyles();
  src =
    src ||
    'https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4';
  return (
    <Grid>
      <Grid.Col span={1} className={classes.avatarContainer}>
        <Avatar src={src} size={48} />
      </Grid.Col>
      <Grid.Col span={11}>{children}</Grid.Col>
    </Grid>
  );
}
