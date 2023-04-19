import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.css";
import Home from "./Home";
import Owner from "./Owner";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "Owner",
    element: <Owner />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
