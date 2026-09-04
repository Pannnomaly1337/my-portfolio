import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Error from "./pages/Error.jsx";
import Layout from "./components/Layout.jsx";
import Homepage from "./pages/Homepage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <Homepage /> },
        ],
      },
    ],
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router = { router } />
);