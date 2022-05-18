import { useMemo, useState } from 'react';
import {
  Navbar,
  TextInput,
  Code,
  UnstyledButton,
  Badge,
  Text,
  Group,
  ActionIcon,
  Tooltip,
  Input,
  Loader,
} from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { Search, Plus, Hash, SquarePlus } from 'tabler-icons-react';
import { useRouter } from 'next/router';
import { useCreateRoom, useGetDomain } from './InnerNavbar.hooks';

import useStyles from './InnerNavbar.style';
import { InnerNavbarProps, Room, Shortcuts } from './InnerNavbar.d';

export function InnerNavbar({
  defaultDomainId,
}: InnerNavbarProps): JSX.Element {
  const { classes } = useStyles();
  const router = useRouter();
  const [isNewRoom, setIsNewRoom] = useState<boolean>(false);
  const [newRoomName, setNewRoomName] = useInputState<string>('');
  console.log(newRoomName);

  const domainId = router.query?.domain?.[0] || defaultDomainId;
  const {
    data: domain,
    // status: domainStatus,
    // error: domainError,
  } = useGetDomain(domainId as string, { enabled: !!domainId });
  const { rooms, shortcuts }: { rooms: Room[]; shortcuts: Shortcuts } = domain;

  const createRooom = useCreateRoom();
  console.log({ createRooom });

  const handleCreateRoom = () => {
    createRooom.mutate(
      { name: newRoomName, domainId },
      {
        onError: () => {
          setTimeout(() => {
            createRooom.reset();
          }, 3000);
        },
      },
    );
  };

  const shortcutLinks = shortcuts?.map(shortcut => (
    <UnstyledButton key={shortcut.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        {/* <shortcut.icon size={20} className={classes.mainLinkIcon} /> */}
        <span>{shortcut.label}</span>
      </div>
      {shortcut.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {shortcut.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));

  return (
    <Navbar p="md" className={classes.navbar}>
      <Navbar.Section className={classes.section}>
        <Text className={classes.domainName}>Domain Name</Text>
      </Navbar.Section>
      <TextInput
        placeholder="Search"
        size="xs"
        icon={<Search size={12} />}
        rightSectionWidth={70}
        rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        mb="sm"
      />

      <Navbar.Section className={classes.section}>
        <div className={classes.navbarSectionPadding}>{shortcutLinks}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.section}>
        <Group className={classes.collectionsHeader} position="apart">
          <Text size="xs" weight={500} color="dimmed">
            Rooms
          </Text>
          {!isNewRoom && (
            <Tooltip label="Create Room" withArrow position="right">
              <ActionIcon
                variant="default"
                size={18}
                onClick={() => setIsNewRoom(true)}
              >
                <Plus size={12} />
              </ActionIcon>
            </Tooltip>
          )}
        </Group>
        <Group className={classes.rooms} position="apart">
          {isNewRoom && (
            <TextInput
              value={newRoomName}
              onChange={setNewRoomName}
              sx={{ width: '100%' }}
              variant="filled"
              placeholder="New room"
              rightSectionWidth={40}
              error={
                createRooom.isError ? createRooom.error?.response?.data : null
              }
              rightSection={
                createRooom.isLoading ? (
                  <Loader size="xs" />
                ) : newRoomName.length > 0 ? (
                  <Tooltip label="Create" withArrow position="right">
                    <ActionIcon
                      variant="default"
                      size={18}
                      onClick={handleCreateRoom}
                    >
                      <Plus size={12} />
                    </ActionIcon>
                  </Tooltip>
                ) : null
              }
            />
          )}

          {rooms.length === 0 && (
            <Text className={classes.infoText} color="dimmed">
              No Rooms yet.
            </Text>
          )}
          {rooms?.map(room => (
            // eslint-disable-next-line @next/next/no-html-link-for-pages
            <a
              href="/"
              onClick={event => event.preventDefault()}
              key={room.id}
              className={classes.collectionLink}
            >
              <Hash size={12} />
              {room.name}
            </a>
          ))}
        </Group>
      </Navbar.Section>
    </Navbar>
  );
}

export default InnerNavbar;
