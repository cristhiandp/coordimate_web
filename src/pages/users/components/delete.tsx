import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton, Tooltip } from "@mui/material";

type DeleteProps = {
  id: number;
  onDelete: (id: number) => void;
};

const Delete: React.FC<DeleteProps> = ({ id, onDelete }) => (
  <Tooltip title="Delete user">
    <IconButton onClick={() => onDelete(id)}>
      <DeleteOutlineIcon />
    </IconButton>
  </Tooltip>
);

export { Delete };
