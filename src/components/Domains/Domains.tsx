import React, { useState } from 'react';
import { UnstyledButton, Tooltip, Navbar } from '@mantine/core';
import { useGetDomains } from 'containers/Shell/Shell.hooks';
import useStyles from './Domains.style';

function Domains() {
  const { data: domains, status, error } = useGetDomains();
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Releases');
  const domainLinks = domains.map(domain => (
    <Tooltip
      label={domain.label}
      position="right"
      withArrow
      transitionDuration={0}
      key={domain.label}
    >
      <UnstyledButton
        onClick={() => setActive(domain.label)}
        className={cx(classes.mainLink, {
          [classes.mainLinkActive]: domain.label === active,
        })}
      >
        {/* Icons will be here */}
        {/* <domain.icon /> */}
        <h4>{domain.label[0]}</h4>
      </UnstyledButton>
    </Tooltip>
  ));
  return (
    <Navbar>
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo} />
          {domainLinks}
        </div>
      </Navbar.Section>
    </Navbar>
  );
}

export default React.memo(Domains);
