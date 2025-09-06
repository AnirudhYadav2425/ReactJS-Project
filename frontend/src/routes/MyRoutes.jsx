import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import RegisterPage from "../components/RegisterPage";
import LoginPage from "../components/LoginPage";
import Home from "../components/Home";
import Products from "../components/Products";
import UserPrivate from "./UserPrivate";

export let myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: (
          <UserPrivate>
            <Home />
          </UserPrivate>
        ),
      },
      {
        path: "/products",
        element: (
          <UserPrivate>
            <Products />
          </UserPrivate>
        ),
      },
    ],
  },
]);
