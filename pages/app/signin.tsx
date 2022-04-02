import { GetServerSidePropsContext } from 'next';
import SignInForm from 'containers/SignInFom';

export function SignIn() {
  return <SignInForm />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {},
  };
}

export default SignIn;
