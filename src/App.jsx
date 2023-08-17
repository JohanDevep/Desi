import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Inicio } from "./screens/Inicio";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Inicio />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
