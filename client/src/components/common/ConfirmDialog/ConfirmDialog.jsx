import React from 'react';
import { Modal } from '../../ui/Modal';
import { Button } from '../../ui/Button';

export function ConfirmDialog({ isOpen, onClose, onConfirm, title = 'Are you sure?', message, confirmText = 'Confirm', confirmVariant = 'danger' }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} maxWidth="max-w-md">
      <div className="space-y-4">
        <p className="text-sm text-slate-600 dark:text-slate-300">{message}</p>
        <div className="flex justify-end gap-2 pt-2">
          <Button variant="outline" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button variant={confirmVariant} size="sm" onClick={onConfirm}>
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmDialog;
