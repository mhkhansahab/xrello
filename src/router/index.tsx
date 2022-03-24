import { FC } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";


const Index: FC = () => {
  return useRoutes([
    {
      path: "/",
      children: [
        {
          path: "",
          element: <Navigate to={"/home"} />,
        },
        {
          path: "home",
          element: <Home />,
        }, {
          path: "login",
          element: <Login />,
        }, {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);
};

export default Index;
