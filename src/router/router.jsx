import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import Layout from "../layout/Layout";
import Courses from "../pages/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
