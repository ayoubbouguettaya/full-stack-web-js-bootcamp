import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProtectedLayout from "./ProtectedLayout/layout.tsx";
import ProductsPage from "./routes/products.tsx";
import LoginPage from "./routes/login.tsx";
import Layout from "./Layout/layout.tsx";
import NewProductPage from "./routes/new-product.tsx";
import { UserProvider } from "./context.tsx";

const NotFound = () => {
  return <h1>Page Not Found </h1>;
};

const router = createBrowserRouter([
  {
    path: "/",
    
    element: <ProtectedLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/products/new",
        element: <NewProductPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Layout />,
    children: [
      {
        path: "/login",
        
        element: <LoginPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
