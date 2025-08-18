import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


//import "./index.css";

import Main from "../layout/Main";
import Home from "../pages/Home";
import Product from "../productpage/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

       {
        path: "/product",
        element:<Product></Product>,
      },
    ],


  },
]);
