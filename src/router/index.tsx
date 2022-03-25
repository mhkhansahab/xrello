import { FC } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { useSelector } from "react-redux";

const Index: FC = () => {
  //@ts-ignore
  const isLogged: any = useSelector((state) => state?.userReducer?.token);

  // const checkLogin = () => {
  //   if (isLogged) {
  //     return true;
  //   }
  //   return false;
  // }

  return useRoutes([
    {
      path: "/",
      children: isLogged
        ? [
            {
              path: "",
              element: <Navigate to={"/dashboard"} />,
            },
            {
              path: "login",
              element: <Navigate to={"/dashboard"} />,
            },
            {
              path: "signup",
              element: <Navigate to={"/dashboard"} />,
            },
            {
              path: "dashboard",
              element: <Dashboard />,
            },
            {
              path: "board",
              children: [
                {
                  path: "*",
                  element: <Home />,
                },
              ],
            },
            {
              path: "*",
              element: <PageNotFound />,
            },
          ]
        : [
            {
              path: "",
              element: <Navigate to={"/login"} />,
            },

            {
              path: "login",
              element: <Login />,
            },
            {
              path: "signup",
              element: <Signup />,
            },
            {
              path: "*",
              element: <Login />,
            },
          ],
    },
  ]);
};

export default Index;
