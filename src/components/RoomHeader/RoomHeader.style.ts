import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  header: {
    height: '42px',
    borderBottom: '1px solid #e0e0e0',
    padding: '0 32px 0 32px',
    margin: '-16px -16px 16px -16px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

export default useStyles;
