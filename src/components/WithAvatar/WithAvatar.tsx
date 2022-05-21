import { Avatar, Grid, Divider, Stack } from '@mantine/core';

import { WithAvatarProps } from './WithAvatar.d';

import useStyles from './WithAvatar.style';

export default function WithAvatar({
  children,
  src,
  makeVerticalLine,
}: WithAvatarProps) {
  const { classes } = useStyles();
  src =
    src ||
    'https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4';
  return (
    <Grid columns={16}>
      <Grid.Col span={2} className={classes.avatarContainer}>
        <div>
          <Avatar src={src} size={48} />
        </div>

        {makeVerticalLine && (
          <Divider
            className={classes.divider}
            size={2}
            orientation="vertical"
          />
        )}
      </Grid.Col>
      <Grid.Col span={14}>{children}</Grid.Col>
    </Grid>
  );
}
