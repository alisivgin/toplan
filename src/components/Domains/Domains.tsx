import React, { useState } from 'react';
import { UnstyledButton, Tooltip } from '@mantine/core';
import { useGetDomains } from 'containers/Shell/Shell.hooks';
import useStyles from './Domains.style';

function Domains() {
  const { data: domains, status, error } = useGetDomains();
  console.log(domains);
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
        {/* <domain.icon /> */}
      </UnstyledButton>
    </Tooltip>
  ));
  return (
    <div className={classes.aside}>
      <div className={classes.logo}>{domainLinks}</div>
    </div>
  );
}

export default React.memo(Domains);
