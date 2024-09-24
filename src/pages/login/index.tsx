import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const Login: React.FC = () => {
  const navidate = useNavigate();
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Stack
        sx={{
          maxWidth: "40rem",
          padding: "2.5rem 4rem",
          border: 1,
          borderRadius: 6,
          borderColor: "primary.light",
          boxShadow: 4,
        }}
        direction="column"
        spacing={4}
      >
        <Typography variant="h3" color="text.secondary">
          Bienvenido
        </Typography>
        <Stack spacing={2}>
          <TextField label="Usuario" />
          <TextField label="Contraseña" />
        </Stack>
        <Stack spacing={1}>
          <Button
            variant="contained"
            color="primary"
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
