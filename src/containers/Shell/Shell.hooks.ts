import { useQuery } from 'react-query';
import axios from 'lib/axios';
import { UseGetDomains } from './Shell.d';

export const ShellKeys = {
  domains: ['domains'] as const,
  domain: (id: string) => ['domain', id] as const,
};

// APIs
async function getDomains() {
  const { data } = await axios.get('api/domains');
  return data;
}

// react query hooks
export const useGetDomains: UseGetDomains = () => {
  const { data, status, error } = useQuery(ShellKeys.domains, getDomains, {
    retry: false,
    initialData: [],
  });
  return { data, status, error };
};
