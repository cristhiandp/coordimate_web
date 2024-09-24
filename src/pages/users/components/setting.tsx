import BuildIcon from "@mui/icons-material/Build";
import { IconButton, Tooltip } from "@mui/material";

const Setting: React.FC = () => (
  <Tooltip title="Esta funcionalidad no esta disponible">
    <IconButton>
      <BuildIcon />
    </IconButton>
  </Tooltip>
);

export { Setting };
