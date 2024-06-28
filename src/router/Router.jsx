import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Homepage from "../pages/Homepage/Homepage";
import Menu from "../pages/Menu/Menu";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
