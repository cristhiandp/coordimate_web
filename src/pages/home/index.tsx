import React from "react";
import { Button, Stack, Typography, Link, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "@mui/icons-material/BuildCircleOutlined";
import GroupIcon from "@mui/icons-material/AccountCircleOutlined";
import EventIcon from "@mui/icons-material/AccessAlarm";
import AssessmentIcon from "@mui/icons-material/AssessmentOutlined";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="top"
      height="100vh"
      spacing={4}
      sx={{ padding: "2rem" }}
    >
      {/* Botón de cerrar sesión */}
      <Link
        href="/logout"
        variant="body1"
        position={"absolute"}
        top="4rem"
        right="4rem"
        sx={{
          color: "primary.main",
          textDecoration: "none", 
          "&:hover": {
            textDecoration: "none",
          },
        }}
      >
        Cerrar sesión
      </Link>

      {/* Título y subtítulo */}
      <Typography
        variant="h1"
        color="text.secondary"
        sx={{ textAlign: "center" }}
      >
        Bienvenido <span style={{ fontWeight: "bold" }}>Administrador</span>
      </Typography>
      <Typography
        variant="title1"
        color="text.primary"
        sx={{ textAlign: "center" }}
      >
        Aquí podrás gestionar usuarios, eventos y consultar reportes detallados
      </Typography>

      {/* Contenedor de botones e imagen en fila */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={30}
        sx={{ marginTop: "2rem" }}
      >
        {/* Contenedor de los botones */}
        <Stack direction="column" spacing={4}>
          {/* Primera fila de botones */}
          <Stack direction="row" spacing={4} justifyContent="center">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "primary.light",
                color: "text.primary",
                width: "309px",
                height: "204px",
                flexDirection: "column",
              }}
              onClick={() => navigate("/profile")}
            >
              <ProfileIcon sx={{ fontSize: 65, color: "primary.dark" }} />
              <Typography
                variant="h3"
                sx={{ textTransform: "none", fontWeight: "bold" }}
              >
                Mi perfil
              </Typography>
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "primary.light",
                color: "text.primary",
                width: "309px",
                height: "204px",
                flexDirection: "column",
              }}
              onClick={() => navigate("/users")}
            >
              <GroupIcon sx={{ fontSize: 65, color: "primary.dark" }} />
              <Typography
                variant="h3"
                sx={{ textTransform: "none", fontWeight: "bold" }}
              >
                Usuarios
              </Typography>
            </Button>
          </Stack>

          {/* Segunda fila de botones */}
          <Stack direction="row" spacing={4} justifyContent="center">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "primary.light",
                color: "text.primary",
                width: "309px",
                height: "204px",
                flexDirection: "column",
              }}
              onClick={() => navigate("/events")}
            >
              <EventIcon sx={{ fontSize: 65, color: "primary.dark" }} />
              <Typography
                variant="h3"
                sx={{ textTransform: "none", fontWeight: "bold" }}
              >
                Eventos
              </Typography>
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "primary.light",
                color: "text.primary",
                width: "309px",
                height: "204px",
                flexDirection: "column",
              }}
              onClick={() => navigate("/reports")}
            >
              <AssessmentIcon sx={{ fontSize: 65, color: "primary.dark" }} />
              <Typography
                variant="h3"
                sx={{ textTransform: "none", fontWeight: "bold" }}
              >
                Reportes
              </Typography>
            </Button>
          </Stack>
        </Stack>

        {/* Imagen al lado derecho */}
        <Box
          component="img"
          src="src/assets/home_img_1.png"
          sx={{
            width: "641px",
            height: "auto", // Mantener proporción
          }}
          alt="Imagen del home"
        />
      </Stack>
    </Stack>
  );
};

export { Home };
