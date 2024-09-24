import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import { Login } from "./pages/login";
import { Home } from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/events",
    element: <div>Events</div>,
  },
  {
    path: "/reports",
    element: <div>Reports</div>,
  },
  {
    path: "/users",
    element: <div>Users</div>,
  },
  {
    path: "/profile",
    element: <div>Profile</div>,
  },
]);

export { router };
