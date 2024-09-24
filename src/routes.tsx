import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Events } from "./pages/events";
import { Users } from "./pages/users";
import { Reports } from "./pages/reports";
import { Profile } from "./pages/profile";

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
    element: <Events />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

export { router };
