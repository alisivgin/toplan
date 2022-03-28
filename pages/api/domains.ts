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

const domainsMock = [
  { id: '1', icon: Home2, label: 'Home' },
  { id: '2', icon: Gauge, label: 'Dashboard' },
  { id: '3', icon: DeviceDesktopAnalytics, label: 'Analytics' },
  { id: '4', icon: CalendarStats, label: 'Releases' },
  { id: '5', icon: User, label: 'Account' },
  { id: '6', icon: Fingerprint, label: 'Security' },
  { id: '7', icon: Settings, label: 'Settings' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(domainsMock);
}
