import { AppShell } from '@mantine/core';

import Navbar from './Shell.Navbar';

interface ShellProps {
  children: React.ReactElement;
  header?: React.ReactElement;
}

function Shell({ children, header }: ShellProps) {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar />}
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

export default Shell;
