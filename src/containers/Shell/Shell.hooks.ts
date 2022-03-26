import { useQuery, QueryClient } from 'react-query';
import axios from 'axios';

import { UseGetDomains } from 'components/Domains/Domains.d';

export const ShellKeys = {
  domains: ['domains'] as const,
  channels: ['channels'] as const,
  channel: (id: string) => ['channel', id] as const,
};

async function getDomains() {
  const { data } = await axios.get('/api/domains');
  return data;
}

// See: https://react-query.tanstack.com/guides/ssr#using-nextjs
export const prefetchDomains = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(ShellKeys.domains, getDomains);
  return queryClient;
};

export const useGetDomains: UseGetDomains = () => {
  const { data, status, error } = useQuery(ShellKeys.domains, getDomains, {
    retry: false,
    initialData: [],
  });
  return { data, status, error };
};
