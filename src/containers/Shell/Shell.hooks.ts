import { useQuery, QueryClient } from 'react-query';
import axios from 'axios';

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
  const { data } = await axios.get(`http://localhost:3000/api/domains/${id}`);
  return data;
}

// Prefetch

// See: https://react-query.tanstack.com/guides/ssr#using-nextjs
export const prefetchDomains = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(ShellKeys.domains, getDomains);
  return queryClient;
};
export const prefetchDomain = async (id: string) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(ShellKeys.domains, () => getDomain(id));
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

export const useGetDomain: UseGetDomain = (id: string) => {
  const { data, status, error } = useQuery(
    ShellKeys.domains,
    () => getDomain(id),
    {
      retry: false,
      initialData: [],
    },
  );
  return { data, status, error };
};
