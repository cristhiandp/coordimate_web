import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Stack, Typography } from "@mui/material";
import { BackButton } from "../../components/back-button";
import { useState } from "react";
import { Report, REPORTS } from "../../consts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Reports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>(REPORTS);

  const columns: GridColDef<Report>[] = [
    {
      field: "id",
      headerName: "N°",
      flex: 1,
    },
    {
      field: "userName",
      headerName: "Nombre de usuario",
      flex: 3,
      minWidth: 200,
    },
    {
      field: "totalEvents",
      headerName: "Nº eventos",
      minWidth: 150,
      flex: 2,
    },
  ];

  const chartData = [
    { month: "Ene", events: 50 },
    { month: "Feb", events: 30 },
    { month: "Mar", events: 40 },
    { month: "Abr", events: 60 },
    { month: "May", events: 120 },
    { month: "Jun", events: 180 },
    { month: "Jul", events: 300 },
    { month: "Ago", events: 200 },
    { month: "Sep", events: 85 },
    { month: "Oct", events: 45 },
    { month: "Nov", events: 20 },
    { month: "Dic", events: 10 },
  ];

  return (
    <Stack
      direction="row"
      spacing={4}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ padding: "2rem" }}
    >
      <Stack direction="column" sx={{ flex: 1 }}>
        <BackButton />
        <Box>
          <Typography variant="h3" color="text.primary">
            Reportes
          </Typography>
          <DataGrid
            rows={reports}
            rowSelection={false}
            columns={columns}
            initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
            pageSizeOptions={[5, 10]}
            autoHeight
            sx={{
              border: 0,
              "& .MuiDataGrid-columnHeaders": {
                "& .MuiDataGrid-row--borderBottom": {
                  backgroundColor: "background.paper",
                },
                "& .MuiDataGrid-columnHeaderTitle": {
                  fontWeight: "bold",
                },
              },
            }}
          />
        </Box>
      </Stack>

      {/* Gráfica de eventos por mes */}
      <Box sx={{ flex: 1, height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend
              verticalAlign="top"
              height={36}
              wrapperStyle={{
                color: "black !important",
                fontWeight: "bold",
                fontSize: "14px", 
              }}
            />
            <Bar
              dataKey="events"
              fill="#00B8D9"
              name="Número de eventos por mes"
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Stack>
  );
};

export { Reports };
