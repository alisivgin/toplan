import React, { useState } from 'react';
import { UnstyledButton, Tooltip, Navbar } from '@mantine/core';

import { DomainsProps } from './Domains.d';
import useStyles from './Domains.style';

function Domains({ domains }: DomainsProps) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Releases');
  const domainLinks = domains.map(domain => (
    <Tooltip
      label={domain.name}
      position="right"
      withArrow
      transitionDuration={0}
      key={domain.id}
    >
      <UnstyledButton
        onClick={() => setActive(domain.id)}
        className={cx(classes.mainLink, {
          [classes.mainLinkActive]: domain.id === active,
        })}
      >
        {/* Icons will be here */}
        {/* <domain.icon /> */}
        <h4>{domain.name?.[0]}</h4>
      </UnstyledButton>
    </Tooltip>
  ));
  return (
    <Navbar className={classes.wrapper}>
      <Navbar.Section grow>
        <div className={classes.aside}>
          {/* <div className={classes.logo} /> */}
          {domainLinks}
        </div>
      </Navbar.Section>
    </Navbar>
  );
}

export default React.memo(Domains);
