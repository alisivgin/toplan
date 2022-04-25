import { UseQueryResult } from 'react-query';
import { Domain } from 'components/Domains/Domains.d';

export type UseGetDomains = () => {
  data: Domain[];
  status: UseQueryResult['status'];
  error: UseQueryResult['error'];
};
