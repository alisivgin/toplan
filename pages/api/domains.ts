import { NextApiRequest, NextApiResponse } from 'next';
import {
  Home2,
  Gauge,
  DeviceDesktopAnalytics,
  Fingerprint,
  CalendarStats,
  User,
  Settings,
} from 'tabler-icons-react';
import { getSession } from 'next-auth/react';
import { prisma } from 'lib/prisma';

const domainsMock = [
  { id: '1', icon: Home2, label: 'Home' },
  { id: '2', icon: Gauge, label: 'Dashboard' },
  { id: '3', icon: DeviceDesktopAnalytics, label: 'Analytics' },
  { id: '4', icon: CalendarStats, label: 'Releases' },
  { id: '5', icon: User, label: 'Account' },
  { id: '6', icon: Fingerprint, label: 'Security' },
  { id: '7', icon: Settings, label: 'Settings' },
];

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
        some: {
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
        name: `${userName || 'My'}'s Domain`,
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
