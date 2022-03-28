import Domains from 'components/Domains';
import InnerNavbar from 'components/InnerNavbar';
import { useGetDomains, useGetDomain } from './Shell.hooks';

import { useShellNavbarStyles } from './Shell.style';

function Navbar() {
  const { classes } = useShellNavbarStyles();
  const {
    data: domains,
    status: domainsStatus,
    error: domainsError,
  } = useGetDomains();
  console.log({ domains });
  // const {
  //   data: domain,
  //   status: domainStatus,
  //   error: domainError,
  // } = useGetDomain(domains[0].id);
  return (
    <div className={classes.container}>
      <Domains domains={domains} />
      {/* <InnerNavbar {...domain} /> */}
    </div>
  );
}

export default Navbar;
