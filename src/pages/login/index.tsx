import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const Login: React.FC = () => {
  const navidate = useNavigate();
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => navidate("/home")}
    >
      Login
    </Button>
  );
};

export { Login };
