import { useMemo } from 'react';
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
} from '@mantine/core';
import { Search, Plus, Hash } from 'tabler-icons-react';
import { useRouter } from 'next/router';
import { useCreateRoom, useGetDomain } from './InnerNavbar.hooks';

import useStyles from './InnerNavbar.style';
import { InnerNavbarProps, Room, Shortcuts } from './InnerNavbar.d';

export function InnerNavbar({
  defaultDomainId,
}: InnerNavbarProps): JSX.Element {
  const { classes } = useStyles();
  const router = useRouter();

  const domainId = router.query?.domain?.[0] || defaultDomainId;
  const {
    data: domain,
    // status: domainStatus,
    // error: domainError,
  } = useGetDomain(domainId as string, { enabled: !!domainId });
  const { rooms, shortcuts }: { rooms: Room[]; shortcuts: Shortcuts } = domain;

  const createRooom = useCreateRoom();

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

  const roomSection = useMemo(() => {
    if (rooms.length === 0) {
      return (
        <Text className={classes.infoText} color="dimmed">
          No Rooms yet.
        </Text>
      );
    }
    return rooms?.map(room => (
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
    ));
  }, []);

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
          <Tooltip label="Create collection" withArrow position="right">
            <ActionIcon variant="default" size={18}>
              <Plus size={12} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <div className={classes.rooms}>{roomSection}</div>
      </Navbar.Section>
    </Navbar>
  );
}

export default InnerNavbar;
