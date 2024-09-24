import { ThemeProvider } from "@mui/material";
import "./App.css";
import { theme } from "./theme";
import { Route, RouterProvider, Routes } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
