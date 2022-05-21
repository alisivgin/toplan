import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  avatarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '0',
  },
  divider: {
    width: 'calc(50% - 1px)',
    marginLeft: '50%',
    marginTop: '20px',
  },
}));

export default useStyles;
