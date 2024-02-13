import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import Table from "./components/pages/Table";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/table",
    element: <Table />,
  },
  {
    path: "/matchday",
    element: <div>matchday!</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
