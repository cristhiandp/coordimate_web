import {
  Button,
  FormControl,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { palette } = useTheme();

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
    >
      <Stack
        sx={{
          padding: "2.5rem 4rem",
          border: 2,
          borderRadius: 4,
          borderColor: "primary.light",
          boxShadow: `0px 0px 20px ${palette.primary.light}`,
          minWidth: "16rem",
        }}
        direction="column"
        alignItems={"center"}
        spacing={4}
      >
        <Typography variant="h3" color="text.secondary">
          Bienvenido
        </Typography>
        <Stack spacing={2} width="100%">
          <FormControl sx={{ minWidth: "15rem" }}>
            <Typography variant="body2" sx={{ marginBlockEnd: "0.5rem" }}>
              Usuario *
            </Typography>
            <TextField label="Usuario" size="small" />
          </FormControl>
          <FormControl sx={{ minWidth: "15rem" }}>
            <Typography variant="body2" sx={{ marginBlockEnd: "0.5rem" }}>
              Contraseña *
            </Typography>
            <TextField label="Contraseña" size="small" />
          </FormControl>
        </Stack>
        <Stack direction="column" alignItems="center" spacing={1}>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
            onClick={() => navigate("/home")}
          >
            Login
          </Button>
          <Typography variant="body2">
            <Link href="/register">Olvide mi contraseña</Link>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { Login };
