import { NextApiRequest, NextApiResponse } from 'next';

const channels = {
  label: 'Channels',
  data: [
    { icon: '👍', label: 'Team 1' },
    { icon: '🚚', label: 'Team 2' },
    { icon: '💸', label: 'Team 3' },
    { icon: '💰', label: 'Team 4' },
  ],
};

const shortcuts = {
  label: 'Shortcuts',
  hasSearch: true,
  data: [
    { icon: '💰', label: 'Activity', notifications: 3 },
    { icon: '💰', label: 'Tasks', notifications: 4 },
    { icon: '💰', label: 'Contacts' },
  ],
};

export async function getDomain(domainId: string) {
  return {
    shortcuts,
    channels,
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await getDomain(req.query?.domainId as string);
  res.status(200).json(response);
}
