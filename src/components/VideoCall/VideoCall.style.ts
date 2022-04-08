import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  container: {
    display: 'flex',
    width: '100%',
    height: '500px',
    border: '2px solid red',
    borderRadius: theme.radius.lg,
  },
}));

export default useStyles;
