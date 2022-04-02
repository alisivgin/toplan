import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import SignInForm from 'containers/SignInFom';

export function SignIn() {
  return <SignInForm />;
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const session = await getSession({ req });
  console.log(session);
  // if (session) {
  //   return {
  //     redirect: {
  //       permanent: true,
  //       destination: '/app/1235',
  //     },
  //   };
  // }
  return {
    props: {},
  };
}

export default SignIn;
