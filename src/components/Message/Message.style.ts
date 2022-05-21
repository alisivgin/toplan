import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  container: {
    backgroundColor: theme.colors.white,
  },
  messageTitle: {
    width: '100%',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
