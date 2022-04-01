import React from 'react';
import { Title, Text, Button, Container, useMantineTheme } from '@mantine/core';
import { Dots } from './Dots';

import useStyles from './Hero.style';

export function Hero() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  function handleOnRequest(event: React.MouseEvent<HTMLButtonElement>) {
    event?.preventDefault();
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Increase for{' '}
          <Text component="span" color={theme.primaryColor} inherit>
            productivity
          </Text>{' '}
          for any teams
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            <Text component="span" weight="bold">
              Toplan
            </Text>{' '}
            provides a suite of communication tools to help teams to be
            synchronized including video, audio and text chat.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size="lg"
            onClick={handleOnRequest}
          >
            Request Demo
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
