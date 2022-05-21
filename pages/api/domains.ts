import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from 'lib/prisma';

export async function getDomains(
  userId: string,
  userName: string | null | undefined,
) {
  const domains = await prisma.domain.findMany({
    select: {
      id: true,
      name: true,
    },
    where: {
      users: {
        every: {
          userId: userId as string,
        },
      },
    },
  });
  if (domains.length === 0) {
    // if no domains, create one
    const createdAt = new Date();
    const newDomain = await prisma.domain.create({
      select: {
        id: true,
        name: true,
      },
      data: {
        name: userName ? `${userName}'s Domain` : 'My Domain',
        createdAt,
        updatedAt: createdAt,
        users: {
          create: {
            userId: userId as string,
          },
        },
      },
    });
    domains.push(newDomain);
  }
  return domains;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ message: 'Not authenticated' });
    return;
  }

  // get Domains here
  const domains = await getDomains(session.userId, session.user?.name);
  res.status(200).json(domains);
}
