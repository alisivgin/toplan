import { useQuery, QueryClient } from 'react-query';
import axios from 'axios';

import { Domain } from 'components/Domains/Domains.d';
import { UseGetDomains, UseGetDomain } from './Shell.d';

export const ShellKeys = {
  domains: ['domains'] as const,
  domain: (id: string) => ['domain', id] as const,
};

// APIs
async function getDomains() {
  const { data } = await axios.get('http://localhost:3000/api/domains');
  return data;
}

async function getDomain(id: string) {
  const { data } = await axios.get(`http://localhost:3000/api/domain/${id}`);
  return data;
}

// Prefetch
// See: https://react-query.tanstack.com/guides/ssr#using-nextjs
export const prefetchShell = async (routerDomainId: string | undefined) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(ShellKeys.domains, getDomains);
  let domainId = routerDomainId;

  const domains = queryClient.getQueryData(ShellKeys.domains);
  if (!domainId) {
    domainId = (domains as Domain[])[0].id;
  }
  // else if (!domains.find(domain => domain.id === domainId)) {
  //   return new Error(`Domain ${domainId} not found`);
  // }
  await queryClient.prefetchQuery(ShellKeys.domain(domainId), () =>
    getDomain(domainId!),
  );
  return queryClient;
};

// react query hooks
export const useGetDomains: UseGetDomains = () => {
  const { data, status, error } = useQuery(ShellKeys.domains, getDomains, {
    retry: false,
    initialData: [],
  });
  return { data, status, error };
};

export const useGetDomain: UseGetDomain = (id: string, options) => {
  const { data, status, error } = useQuery(
    ShellKeys.domain(id),
    () => getDomain(id),
    options,
  );
  return { data, status, error };
};
