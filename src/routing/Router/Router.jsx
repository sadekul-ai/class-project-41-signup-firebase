import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../components/Home/Home";
import AboutUS from "../../components/AboutUS/AboutUS";
import SignIn from "../../components/SignIn/SignIn";
import SignUP from "../../components/SignUP/SignUP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/aboutus",
        element: <AboutUS></AboutUS>,
      },
      {
        path: "/signin",
        element:<SignIn></SignIn>,
      },
      {
        path: "/signup",
        element:<SignUP></SignUP>,
      },
    ],
  },
]);

export default router
