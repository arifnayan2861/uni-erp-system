import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Home/Homepage";
import Courses from "../pages/Courses/Courses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "/courses",
        element: <Courses />,
      },
    ],
  },
]);
