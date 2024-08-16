import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashbord from "./pages/Dashbord";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashbord />,
      },
    ],
  },
]);
