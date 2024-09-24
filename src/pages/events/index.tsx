import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { EVENTS } from "../../consts";
import { Box, Stack, Typography } from "@mui/material";
import { BackButton } from "../../components/back-button";

const columns: GridColDef<Event>[] = [
  {
    field: "id",
    headerName: "N°",
    flex: 1,
  },
  {
    field: "name",
    headerName: "Nombre",
    flex: 3,
    minWidth: 200,
  },
  {
    field: "type",
    headerName: "Tipo de actividad",
    minWidth: 150,
    flex: 2,
  },
  {
    field: "date",
    headerName: "Fecha",
    minWidth: 150,
    flex: 2,
  },
  {
    field: "time",
    headerName: "Hora",
    minWidth: 150,
    flex: 2,
  },
  {
    field: "location",
    headerName: "Lugar",
    minWidth: 150,
    flex: 2,
  },
  {
    field: "description",
    headerName: "Descripción",
    minWidth: 200,
    flex: 3,
  },
];

const Events: React.FC = () => {
  return (
    <Stack direction="column">
      <BackButton />
      <Box>
        <Typography variant="h3" color="text.primary">
          Eventos
        </Typography>
        <DataGrid
          rows={EVENTS}
          rowSelection={false}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </Box>
    </Stack>
  );
};

export { Events };
