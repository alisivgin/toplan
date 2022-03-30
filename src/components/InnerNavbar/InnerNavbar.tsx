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
import {
  Bulb,
  User,
  Checkbox,
  Search,
  Plus,
  Selector,
} from 'tabler-icons-react';
// import { MantineLogoSmall } from '../../shared/MantineLogo';

import useStyles from './InnerNavbar.style';
import { InnerNavbarProps } from './InnerNavbar.d';

export function InnerNavbar(props: InnerNavbarProps): JSX.Element {
  const { classes } = useStyles();
  const shortcuts = props?.shortcuts?.data.map(shortcut => (
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

  const channels = props?.channels?.data.map(channel => (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a
      href="/"
      onClick={event => event.preventDefault()}
      key={channel.label}
      className={classes.collectionLink}
    >
      <span style={{ marginRight: 9, fontSize: 16 }}>{channel.icon}</span>
      {channel.label}
    </a>
  ));

  return (
    <Navbar p="md" className={classes.navbar}>
      <Navbar.Section className={classes.section}>
        <Text>Domain Name</Text>
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
        <div className={classes.navbarSectionPadding}>{shortcuts}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.section}>
        <Group className={classes.collectionsHeader} position="apart">
          <Text size="xs" weight={500} color="dimmed">
            Channels
          </Text>
          <Tooltip label="Create collection" withArrow position="right">
            <ActionIcon variant="default" size={18}>
              <Plus size={12} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <div className={classes.collections}>{channels}</div>
      </Navbar.Section>
    </Navbar>
  );
}

export default InnerNavbar;

const links = [
  { icon: Bulb, label: 'Activity', notifications: 3 },
  { icon: Checkbox, label: 'Tasks', notifications: 4 },
  { icon: User, label: 'Contacts' },
];

const collections = [
  { emoji: '👍', label: 'Sales' },
  { emoji: '🚚', label: 'Deliveries' },
  { emoji: '💸', label: 'Discounts' },
  { emoji: '💰', label: 'Profits' },
  { emoji: '✨', label: 'Reports' },
  { emoji: '🛒', label: 'Orders' },
  { emoji: '📅', label: 'Events' },
  { emoji: '🙈', label: 'Debts' },
  { emoji: '💁‍♀️', label: 'Customers' },
];
