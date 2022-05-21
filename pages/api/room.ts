import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from 'lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ message: 'Not authenticated' });
    return;
  }
  console.log(req.body);
  if (req.method === 'POST') {
    try {
      const data = await prisma.room.create({
        data: {
          ...req.body,
        },
      });
      console.log({ data });
      res.status(200).json({ message: 'Room created' });
    } catch (error) {
      console.log({ error });
      res.status(500).json('Something went wrong');
    }
  }
}
