import Shell from 'containers/Shell';
import { dehydrate } from 'react-query';
import { prefetchDomains } from 'containers/Shell/Shell.hooks';

export default function HomePage() {
  return (
    <Shell>
      <div>this is a page</div>
    </Shell>
  );
}

export async function getServerSideProps(context) {
  const queryClient = await prefetchDomains();
  // console.log({ queryClient: queryClient.getQueryState(['domains']) });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
