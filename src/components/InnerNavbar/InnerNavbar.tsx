import { useState } from 'react';
import { Navbar, UnstyledButton, Tooltip, Title } from '@mantine/core';
import {
  Home2,
  Gauge,
  DeviceDesktopAnalytics,
  Fingerprint,
  CalendarStats,
  User,
  Settings,
} from 'tabler-icons-react';
// import { MantineLogoSmall } from '../../shared/MantineLogo';

import useStyles from './InnerNavbar.style';

interface InnerNavbarProps {}

export function InnerNavbar(props: InnerNavbarProps) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Releases');
  const [activeLink, setActiveLink] = useState('Settings');

  const mainLinks = mainLinksMockdata.map(link => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionDuration={0}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={cx(classes.mainLink, {
          [classes.mainLinkActive]: link.label === active,
        })}
      >
        <link.icon />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = linksMockdata.map(link => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: activeLink === link,
      })}
      href="/"
      onClick={event => {
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  return (
    <Navbar height={750} width={{ sm: 300 }}>
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo} />
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>
          {links}
        </div>
      </Navbar.Section>
    </Navbar>
  );
}

export default InnerNavbar;

const mainLinksMockdata = [
  { icon: Home2, label: 'Home' },
  { icon: Gauge, label: 'Dashboard' },
  { icon: DeviceDesktopAnalytics, label: 'Analytics' },
  { icon: CalendarStats, label: 'Releases' },
  { icon: User, label: 'Account' },
  { icon: Fingerprint, label: 'Security' },
  { icon: Settings, label: 'Settings' },
];

const linksMockdata = [
  'Security',
  'Settings',
  'Dashboard',
  'Releases',
  'Account',
  'Orders',
  'Clients',
  'Databases',
  'Pull Requests',
  'Open Issues',
  'Wiki pages',
];
