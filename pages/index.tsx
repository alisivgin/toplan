import Shell from 'containers/Shell';
import { dehydrate } from 'react-query';
import { prefetchShell } from 'containers/Shell/Shell.hooks';

export default function HomePage() {
  return (
    <Shell>
      <div>this is a page</div>
    </Shell>
  );
}

export async function getServerSideProps(context) {
  const { router } = context;
  // const queryClient = await prefetchShell();
  // console.log({ queryClient: queryClient.getQueryState(['domains']) });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
