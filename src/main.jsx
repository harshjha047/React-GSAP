import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/auth/Login.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import Contect from "./components/Contect.jsx";
import Card from "./components/Card.jsx";
import Post from "./components/Post.jsx";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/contect",
        element: <Contect />,
      },{
        path:"/post",
        element:<Post/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider > */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>
);
