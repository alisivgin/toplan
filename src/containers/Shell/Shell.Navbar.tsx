import Domains from 'components/Domains';
import InnerNavbar from 'components/InnerNavbar';
import { useMutateRoom } from 'components/InnerNavbar/InnerNavbar.hooks';
import { useGetDomains, useGetDomain } from './Shell.hooks';

import { useShellNavbarStyles } from './Shell.style';

function Navbar() {
  const { classes } = useShellNavbarStyles();
  const {
    data: domains,
    status: domainsStatus,
    error: domainsError,
  } = useGetDomains();
  return (
    <div className={classes.container}>
      <Domains domains={domains} />
      <InnerNavbar defaultDomainId={domains[0].id} />
    </div>
  );
}

export default Navbar;
