import { Grid, Text, Menu, Group, Container, Stack } from '@mantine/core';
import { Edit, Trash } from 'tabler-icons-react';
import WithAvatar from 'components/WithAvatar';

import useStyles from './Message.style';

export default function Message({ makeVerticalLine }) {
  const { classes } = useStyles();
  return (
    <WithAvatar makeVerticalLine={makeVerticalLine}>
      <div className={classes.container}>
        <Group className={classes.messageTitle}>
          <Group spacing="xs">
            <Text weight="bold">Bessie Cooper</Text>
            <Text color="dimmed">3h ago</Text>
          </Group>
          <Menu sx={theme => ({ fontSize: theme.fontSizes.lg })}>
            <Menu.Item icon={<Edit size={14} />}>Edit</Menu.Item>
            <Menu.Item color="red" icon={<Trash size={14} />}>
              Delete
            </Menu.Item>
          </Menu>
        </Group>

        <Stack>
          <Text color="dimmed">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It
          </Text>
        </Stack>
      </div>
    </WithAvatar>
  );
}
