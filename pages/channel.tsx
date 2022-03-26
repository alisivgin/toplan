import { dehydrate } from 'react-query';
import Shell from 'containers/Shell';
import { prefetchDomains } from 'containers/Shell/Shell.hooks';

export default function Channel() {
  return (
    <Shell>
      <div>adsfasdf</div>
    </Shell>
  );
}

export async function getServerSideProps(context) {
  const queryClient = await prefetchDomains();
  console.log({ queryClient });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
