import Domains from 'components/Domains';
import InnerNavbar from 'components/InnerNavbar';

import { useShellNavbarStyles } from './Shell.style';

function Navbar() {
  const { classes } = useShellNavbarStyles();
  return (
    <div className={classes.container}>
      <Domains />
      <InnerNavbar />
    </div>
  );
}

export default Navbar;
