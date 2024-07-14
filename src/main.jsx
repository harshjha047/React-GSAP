import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter,createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/auth/Login.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import Contect from "./components/Contect.jsx";
import Post from "./components/Post.jsx";
import { Client } from 'appwrite';
import Test from "./components/auth/test.jsx";
import Profile from "./components/profile/Profile.jsx";
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
      },{
        path:"/test",
        element:<Test/>
      },{
        path:"/profile",
        element:<Profile/>
      }
    ],
  },
]);
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('669244cd00205111adc6');

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider > */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>
);
