import { useState } from "react";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from "./components/header/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import { Outlet } from "react-router-dom";

function App() {
  useGSAP(() => {
    var tl = gsap.timeline();
    tl.from("#page1", {
      opacity: 0,
      duration: 0.2,
      delay: 0.2,
    });
    tl.from("#page1", {
      transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
      borderRadius: "250px",
      duration: 2,
      ease: "expo.out",
    });
    tl.from("header", {
      opacity: 0,
      delay: -0.2,
    });
    tl.from("#page1 h1, #page1 p, #page1 div", {
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    });
  });

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
