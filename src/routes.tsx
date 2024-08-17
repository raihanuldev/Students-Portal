import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashbord from "./pages/Dashbord";
import AddStudent from "./pages/AddStudent";
import ManageStudents from "./pages/ManageStudents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashbord />,
      },
      {
        path:'add-student',
        element: <AddStudent/>
      },
      {
        path:'manage-student',
        element: <ManageStudents/>
      }
    ],
  },
]);
