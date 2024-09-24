import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import { Login } from "./pages/login";
import { Events } from "./pages/events";
import { Users } from "./pages/users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <div>Home</div>,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/reports",
    element: <div>Reports</div>,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/profile",
    element: <div>Profile</div>,
  },
]);

export { router };
