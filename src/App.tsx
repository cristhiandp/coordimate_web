import { ThemeProvider } from "@mui/material";
import "./App.css";
import { theme } from "./theme";
import { Route, RouterProvider, Routes } from "react-router-dom";
import { router } from "./routes";
import { Layout } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
