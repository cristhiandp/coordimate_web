import React from "react";
import { Button, Stack, Typography, Link, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import AssessmentIcon from '@mui/icons-material/Assessment';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      spacing={4}
      sx={{ padding: "2rem" }}
    >
      <Typography variant="h4" color="text.primary">
        Bienvenido Administrador
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ textAlign: "center" }}>
        Aquí podrás gestionar usuarios, eventos y consultar reportes detallados
      </Typography>

      {/* Primera fila de botones */}
      <Stack direction="row" spacing={4} justifyContent="center" sx={{ marginTop: "2rem" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary.light",
            color: "text.primary",  // Texto en negro
            width: "124px", 
            height: "36px", 
            flexDirection: "column",
          }}
          onClick={() => navigate("/profile")}
        >
          <PersonIcon />
          <Typography variant="body2">Mi perfil</Typography>
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary.light",
            color: "text.primary",  // Texto en negro
            width: "124px", 
            height: "36px", 
            flexDirection: "column",
          }}
          onClick={() => navigate("/users")}
        >
          <GroupIcon />
          <Typography variant="body2">Usuarios</Typography>
        </Button>
      </Stack>

      {/* Segunda fila de botones */}
      <Stack direction="row" spacing={4} justifyContent="center" sx={{ marginTop: "2rem" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary.light",
            color: "text.primary",  // Texto en negro
            width: "124px", 
            height: "36px", 
            flexDirection: "column",
          }}
          onClick={() => navigate("/reports")}
        >
          <AssessmentIcon />
          <Typography variant="body2">Reportes</Typography>
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary.light",
            color: "text.primary",  // Texto en negro
            width: "124px", 
            height: "36px", 
            flexDirection: "column",
          }}
          onClick={() => navigate("/events")}
        >
          <EventIcon />
          <Typography variant="body2">Eventos</Typography>
        </Button>
      </Stack>

      <Link href="/logout" variant="body2" sx={{ marginTop: "3rem", color: "error.main" }}>
        Cerrar sesión
      </Link>
    </Stack>
  );
};

export { Home };
