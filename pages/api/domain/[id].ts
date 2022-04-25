import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from 'lib/prisma';

const channels = {
  label: 'Channels',
  data: [
    { icon: '👍', label: 'Team 1' },
    { icon: '🚚', label: 'Team 2' },
    { icon: '💸', label: 'Team 3' },
    { icon: '💰', label: 'Team 4' },
  ],
};

const shortcuts = [
  { icon: '💰', label: 'Activity', notifications: 3 },
  { icon: '💰', label: 'Tasks', notifications: 4 },
  { icon: '💰', label: 'Contacts' },
];

export async function getDomain(domainId: string) {
  const rooms = await prisma.room.findMany({
    // select: {
    //   id: true,
    //   name: true,
    // },
    where: {
      domains: {
        every: {
          domainId: domainId as string,
        },
      },
    },
  });
  return { rooms, shortcuts };
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
  const domain = await getDomain(req.query?.domainId as string);
  res.status(200).json(domain);
}
