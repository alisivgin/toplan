import { GetServerSidePropsContext } from 'next';
import Shell, { ShellKeys } from 'containers/Shell';
import { dehydrate, QueryClient } from 'react-query';
import { prefetchShell } from 'containers/Shell/Shell.hooks';
import Room from 'containers/Room';
import { getSession } from 'next-auth/react';

import { getDomains } from 'pages/api/domains';
import { getDomain } from 'pages/api/domain/[id]';

export default function HomePage() {
  return (
    <Shell>
      <Room />
    </Shell>
  );
}

export async function getServerSideProps({
  req,
  query,
}: GetServerSidePropsContext) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: '/app/signin',
      },
    };
  }
  const domains = await getDomains(
    session.userId as string,
    session.user?.name,
  );
  const domainId = query?.domain?.[0] || domains[0].id;
  const domain = await getDomain(domainId);

  const queryClient = new QueryClient();
  queryClient.setQueryData(ShellKeys.domains, domains);
  queryClient.setQueryData(ShellKeys.domain(domainId), domain);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
