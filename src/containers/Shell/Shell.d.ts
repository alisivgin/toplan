import { UseQueryResult, QueryQueryObserverOptionsOptions } from 'react-query';
import { Domain } from 'components/Domains/Domains.d';
import { InnerNavbar } from 'components/InnerNavbar/InnerNavbar.d';

export type UseGetDomains = () => {
  data: Domain[];
  status: UseQueryResult['status'];
  error: UseQueryResult['error'];
};

export type UseGetDomain = (
  id: string,
  options: QueryObserverOptions,
) => {
  data: InnerNavbar;
  status: UseQueryResult['status'];
  error: UseQueryResult['error'];
};
