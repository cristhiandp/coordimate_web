import { Box, Button, Modal, Stack, Typography } from "@mui/material";

type ConfirmModalProps = {
  isOpen: boolean;
  title: string;
  confirmText: string;
  cancelText: string;
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  title,
  onConfirm,
  cancelText,
  confirmText,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Stack
        direction="column"
        spacing={8}
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 550,
          bgcolor: "#fff",
          borderRadius: 2,
          boxShadow: 2,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h5">
          {title}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="end">
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{ textTransform: "none" }}
          >
            {cancelText}
          </Button>
          <Button
            variant="contained"
            onClick={onConfirm}
            sx={{ textTransform: "none" }}
          >
            {confirmText}
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export { ConfirmModal };
