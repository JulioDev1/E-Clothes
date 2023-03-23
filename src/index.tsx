import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./global/styled";

import { Home } from "./pages/Home";
import { Man } from "./pages/Man";
import { Woman } from "./pages/Woman";
import { Underwear } from "./pages/Underwear";
import { Pants } from "./pages/Pants";
import { T_Shirts } from "./pages/T_Shirts";
import { AddProduct } from "./pages/AddProduct";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/man",
        element: <Man />,
      },
      {
        path: "/woman",
        element: <Woman />,
      },
      {
        path: "/underwear",
        element: <Underwear />,
      },
      {
        path: "/pants",
        element: <Pants />,
      },
      {
        path: "/t_shirts",
        element: <T_Shirts />,
      },
      {
        path: "/add_product",
        element: <AddProduct />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);
