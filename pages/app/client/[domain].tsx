import { GetServerSidePropsContext } from 'next';
import Shell from 'containers/Shell';
import { dehydrate, QueryClient } from 'react-query';
import { prefetchShell } from 'containers/Shell/Shell.hooks';

export default function HomePage() {
  return (
    <Shell>
      <div>this is a page</div>
    </Shell>
  );
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  console.log(query);
  const queryClient = await prefetchShell(query.domain as string);
  // console.log({ queryClient: queryClient.getQueryState(['domains']) });
  return {
    props: {
      dehydratedState: dehydrate(queryClient as QueryClient),
    },
  };
}
