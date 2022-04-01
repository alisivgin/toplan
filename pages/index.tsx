import Landing from 'containers/Landing';

export default function LandingPage() {
  return <Landing />;
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
