import {
  Button,
  capitalize,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router";

const Login: React.FC = () => {
  const navidate = useNavigate();
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
          border: 1,
          borderRadius: 6,
          borderColor: "primary.light",
          boxShadow: `0px 0px 20px ${palette.primary.light}`,
          minWidth: "16rem",
        }}
        direction="column"
        spacing={4}
      >
        <Typography variant="h3" color="text.secondary">
          Bienvenido
        </Typography>
        <Stack spacing={2} width="100%">
          <TextField label="Usuario" size="medium" />
          <TextField label="Contraseña" />
        </Stack>
        <Stack direction="column" alignItems="center" spacing={1}>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
            onClick={() => navidate("/home")}
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
