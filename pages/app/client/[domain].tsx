import { GetServerSidePropsContext } from 'next';
import Shell from 'containers/Shell';
import { dehydrate, QueryClient } from 'react-query';
import { prefetchShell } from 'containers/Shell/Shell.hooks';
import Room from 'containers/Room';

export default function HomePage() {
  return (
    <Shell>
      <Room />
    </Shell>
  );
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const queryClient = await prefetchShell(query.domain as string);
  // console.log({ queryClient: queryClient.getQueryState(['domains']) });
  return {
    props: {
      dehydratedState: dehydrate(queryClient as QueryClient),
    },
  };
}
