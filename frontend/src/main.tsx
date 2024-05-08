import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import App from "./pages/App";


// tailwind css
import "./assets/css/index.css";
// primreact css
import "primeicons/primeicons.css";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/Perfil/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/entrar",
    element: <Login />,
  },
  {
    path: "/registrar",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },

]);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: false }}>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>
);
