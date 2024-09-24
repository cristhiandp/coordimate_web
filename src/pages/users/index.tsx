import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { User, USERS } from "../../consts";
import { Box, Stack, Typography } from "@mui/material";
import { BackButton } from "../../components/back-button";
import { Delete, Setting } from "./components";
import { useState } from "react";
import { ConfirmModal } from "../../components";

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>(USERS);
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const columns: GridColDef<User>[] = [
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
      field: "email",
      headerName: "Correo electrónico",
      minWidth: 150,
      flex: 2,
    },
    {
      field: "age",
      headerName: "Edad",
      flex: 1,
    },
    {
      field: "gender",
      headerName: "Genero",
      flex: 1,
    },
    {
      field: "city",
      headerName: "Ciudad",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "rol",
      headerName: "Rol",
      flex: 1,
    },
    {
      field: "",
      headerName: "Acciones",
      flex: 2,
      renderCell: ({ row }) => (
        <Stack
          height="100%"
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Setting />
          <Delete
            id={row.id}
            onDelete={(id) => {
              setOpenModal(true);
              setSelectedUser(id);
            }}
          />
        </Stack>
      ),
    },
  ];

  const handleDelete = () => {
    setUsers(users.filter((user) => user.id !== selectedUser));
    setOpenModal(false);
  };

  return (
    <Stack direction="column">
      <BackButton />
      <Box>
        <Typography variant="h3" color="text.primary">
          Usuarios
        </Typography>
        <DataGrid
          rows={users}
          rowSelection={false}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10]}
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
      <ConfirmModal
        isOpen={openModal}
        title="¿Estas seguro de eliminar este usuario?"
        confirmText="Aceptar"
        cancelText="Cancelar"
        onClose={() => {
          setOpenModal(false);
          setSelectedUser(null);
        }}
        onConfirm={() => {
          handleDelete();
        }}
      />
    </Stack>
  );
};

export { Users };
