import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  modal: {
    width: 'auto',
    borderRadius: '6px',
  },
  videoContainer: {
    display: 'flex',
    position: 'relative',
    width: '960px',
    height: '540px',
  },
  video: {
    borderRadius: '6px',
  },
  actionButtons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    position: 'absolute',
    width: '100%',
    bottom: '20px',
  },
  connect: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    minHeight: 'auto',
    gap: '20px',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  },
  videoPlaceholder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.gray[9],
    color: theme.colors.gray[0],
    fontSize: '26px',
  },
  inputSourceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  },
}));

export default useStyles;
