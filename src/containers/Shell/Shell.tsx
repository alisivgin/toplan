import { AppShell } from '@mantine/core';
import { useMemo } from 'react';

import Domains from 'components/Domains';
import { Domain } from 'components/Domains/Domains.d';

import InnerNavbar from 'components/InnerNavbar';

import { useGetDomains } from './Shell.hooks';

interface ShellProps {
  children: React.ReactElement;
  // innerNavbar: React.ReactElement;
  header?: React.ReactElement;
  // domains: React.ReactElement;
}

function Shell({ children, header }: ShellProps) {
  const navbar = (
    <>
      <Domains />
      {/* <InnerNavbar /> */}
    </>
  );
  return (
    <AppShell
      padding="md"
      navbar={navbar}
      header={header}
      styles={theme => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
}

const innersMock = [
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

export default Shell;
