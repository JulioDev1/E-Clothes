import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./global/styles";

import { Home } from "./pages/Home";
import { Masculine } from "./pages/Masculine";
import { Feminine } from "./pages/Feminine";

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
        path: "/masculine",
        element: <Masculine />,
      },
      {
        path: "/feminine",
        element: <Feminine />,
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
