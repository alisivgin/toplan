import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Header as MantineHeader,
  Container,
  Group,
  Burger,
  Button,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
// import { MantineLogo } from '../../shared/MantineLogo';

import useStyles from './Header.style';

import { mockLinks } from './mockLinks';

interface HeaderProps {
  links: { link: string; label: string }[];
}

function Header({ links = mockLinks }: HeaderProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const router = useRouter();

  function handleLogIn(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    router.push('/app/signin');
  }

  const items = links.map(link => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={event => {
        event.preventDefault();
        setActive(link.link);
        document
          .querySelector(link.link)
          ?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <MantineHeader height={60} mb={120}>
      <Container className={classes.header}>
        {/* <MantineLogo /> */}
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Button onClick={handleLogIn}>Log in</Button>

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </MantineHeader>
  );
}

export default Header;
