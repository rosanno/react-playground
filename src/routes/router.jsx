import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Blogs from "../views/Blogs";
import Layout from "../components/Layout/Layout";
import Blog from "../views/Blog";
import NotFound from "../views/NotFound";
import Products from "../views/Products";
import About from "../views/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        element: <Blog />,
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
