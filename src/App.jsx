import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoaRequestForm from "./pages/LoaRequestForm";
import Admin from "./pages/Admin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoaRequestForm />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
