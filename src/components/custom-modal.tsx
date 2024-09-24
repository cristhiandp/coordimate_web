import { Button, Modal, Stack, Typography} from "@mui/material";

type CustomModalProps = {
  isOpen: boolean;
  title: string;
  contentText: string;
  onClose: () => void;
};

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  title,
  contentText,
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
        <Typography id="modal-modal-title" variant="h5" sx={{ textAlign: "center", color: "text.secondary" }} >
          {title}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{ textTransform: "none" }}
          >
            {contentText}
          </Button>

        </Stack>
      </Stack>
    </Modal>
  );
};

export { CustomModal };
