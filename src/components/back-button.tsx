import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton: React.FC = () => {
  const navigation = useNavigate();

  return (
    <Stack justifyContent="start" direction="row">
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        color="text.primary"
        sx={{ textTransform: "none" }}
        onClick={() => {
          navigation(-1);
        }}
      >
        Regresar
      </Button>
    </Stack>
  );
};

export { BackButton };
