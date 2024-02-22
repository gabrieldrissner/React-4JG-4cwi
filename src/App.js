import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import Table from "./components/pages/Table";
import Matchday from "./components/pages/Matchday";

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
    element: <Matchday/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
