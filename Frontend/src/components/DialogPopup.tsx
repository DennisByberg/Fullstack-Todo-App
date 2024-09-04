import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';

interface IDialogPopupProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dialogTitle: string;
  dialogText: string;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
}

function DialogPopup({
  open,
  setOpen,
  dialogTitle,
  dialogText,
  confirmText,
  cancelText,
  onConfirm,
}: IDialogPopupProps) {
  function handleConfirmClick() {
    onConfirm();
    setOpen(false);
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby={'alert-dialog-title'}
        aria-describedby={'alert-dialog-description'}
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={() => setOpen(false)}>
            {cancelText}
          </Button>
          <Button onClick={handleConfirmClick}>{confirmText}</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default DialogPopup;
