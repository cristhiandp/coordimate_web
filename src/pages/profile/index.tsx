import React from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  Avatar,
  useTheme,
} from "@mui/material";
import { BackButton } from "../../components/back-button";

const Profile: React.FC = () => {
  const theme = useTheme();
  return (
    <Box sx={{ padding: "2rem", width: "100%", height: "100%" }}>
      {/* Fila 1: Botón Regresar */}
      <BackButton />

      {/* Fila 2: Título y Botón Editar */}
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginTop: "2rem" }}
      >
        <Typography variant="h3" color="text.primary">
          Mi perfil
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "none" }}
        >
          Editar Perfil
        </Button>
      </Stack>

      {/* Fila 3: Datos del usuario y Foto */}
      <Stack direction="row" spacing={4} sx={{ marginTop: "2rem" }}>
        {/* Datos del Usuario (80%) */}
        <Stack spacing={2} sx={{ flex: 4 }}>
          <Box
            sx={{
              padding: "2rem",
              borderBottom: `2px solid ${theme.palette.primary.main}`, // Usar el color del theme
              height: 200,
            }}
          >
            <Stack spacing={2}>
              {/* Fila 1 */}
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <Box display="flex" flex={1} alignItems="center">
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ marginRight: 1 }}
                  >
                    Nombre
                  </Typography>
                  <Typography variant="h5">Carlos Arturo Messi</Typography>
                </Box>
                <Box display="flex" flex={1} alignItems="center">
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ marginRight: 1 }}
                  >
                    Edad
                  </Typography>
                  <Typography variant="h5">54</Typography>
                </Box>
                <Box display="flex" flex={1} alignItems="center">
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ marginRight: 1 }}
                  >
                    Teléfono
                  </Typography>
                  <Typography variant="h5">315 555 48 25</Typography>
                </Box>
              </Stack>

              {/* Fila 2 */}
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <Box display="flex" flex={1} alignItems="center">
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ marginRight: 1 }}
                  >
                    País
                  </Typography>
                  <Typography variant="h5">Colombia</Typography>
                </Box>
                <Box display="flex" flex={1} alignItems="center">
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ marginRight: 1 }}
                  >
                    Ciudad
                  </Typography>
                  <Typography variant="h5">Puerto Legizamo</Typography>
                </Box>
                <Box display="flex" flex={1} alignItems="center">
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ marginRight: 1 }}
                  >
                    Dirección
                  </Typography>
                  <Typography variant="h5">Carrera 20 - 54d - 52</Typography>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        {/* Foto (20%) */}
        <Stack justifyContent="center" alignItems="center" sx={{ flex: 1 }}>
          <Avatar
            alt="Carlos Arturo Messi"
            src="https://mui.com/static/images/avatar/5.jpg"
            sx={{ width: 200, height: 200, borderRadius: "8px" }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export { Profile };
