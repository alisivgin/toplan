import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from 'lib/prisma';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/app/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/app/verifyRequest', // (used for check email message)
    // newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    async session({ session, token, user }) {
      // console.log(token, user, session);
      // eslint-disable-next-line no-param-reassign
      session.userId = user?.id;
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log({ user, account, profile, email, credentials });
      return true;
    },
  },
});
