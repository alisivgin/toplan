import { UseQueryResult } from 'react-query';

export interface Domain {
  icon?: any;
  label: string;
}

export type UseGetDomains = () => {
  data: Domain[];
  status: UseQueryResult['status'];
  error: UseQueryResult['error'];
};
