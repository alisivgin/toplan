import { UseQueryResult } from 'react-query';

interface Room {
  map(arg0: (room: any) => JSX.Element);
  id: string;
  name: string;
  domainId: string;
}

interface Shortcuts {
  map(arg0: (shortcut: any) => JSX.Element);
  label: string;
}

export interface InnerNavbarProps {
  defaultDomainId: string;
}

export type UseGetDomain = (
  id: string,
  options: QueryObserverOptions,
) => {
  data: InnerNavbar;
  status: UseQueryResult['status'];
  error: UseQueryResult['error'];
};
