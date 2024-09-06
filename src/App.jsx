
import Home from "./routes/home"
import Detail from "./routes/detail";
import Latest from "./routes/latest";
import Rate from "./routes/rate"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "latest",
        element: <Latest />,
      },
      {
        path: "movie/:id",
        element: <Detail />,
      },
      {
        path: "rate",
        element: <Rate />,
      },
    ],
  },
]);
export default function App() {
  

  return <RouterProvider router={router} />;
}