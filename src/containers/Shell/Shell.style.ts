import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({}));

const useShellNavbarStyles = createStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: 'min-content',
  },
}));

export { useStyles as default, useShellNavbarStyles };
