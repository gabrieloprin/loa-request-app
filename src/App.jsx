import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoaRequestForm from "./pages/LoaRequestForm";
import Admin from "./pages/Admin";
import DataTableLayout from "./layouts/DataTableLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoaRequestForm />,
    },
    {
      path: "/admin",
      element: <Admin />,
      children: [
        {
          index: "*",
          element: <DataTableLayout />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
