export type InnerNavbarData = {
  icon: string;
  label: string;
  notifications?: number;
};
interface Channels {
  map(arg0: (channel: any) => JSX.Element);
  label: string;
  data: InnerNavbarData[];
}

interface Shortcuts {
  map(arg0: (shortcut: any) => JSX.Element);
  label: string;
  data: InnerNavbarData[];
}

export interface InnerNavbarProps {
  shortcuts: Shortcuts;
  channels: Channels;
}
