import { Modal } from '@mantine/core';
import { PreJoinModalProps } from './PreJoinModal.d';

function PreJoinModal({ isOpen, onClose }: PreJoinModalProps) {
  return <Modal centered opened={isOpen} onClose={onClose} />;
}

export default PreJoinModal;
