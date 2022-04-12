export interface PreJoinModalProps {
  isOpen: boolean;
  onClose(): void;
  onConnect(params: { [key: string]: string | boolean }): void;
}

type MediaInputOptions = {
  deviceId: string;
  groupId: string;
  kind: string;
  label: string;
  value: string;
};
