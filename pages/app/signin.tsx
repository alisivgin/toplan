import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import SignInForm from 'containers/SignInFom';

export default function SignIn() {
  return <SignInForm />;
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const session = await getSession({ req });
  console.log(session);
  if (session) {
    return {
      redirect: {
        destination: 'app/client/xyz',
      },
    };
  }
  return {
    props: {},
  };
}
