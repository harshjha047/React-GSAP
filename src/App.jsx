import { useState } from "react";
import { Client } from 'appwrite';
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
// import useGSAPScroll from "./locomotive";


function App() {

  // useGSAPScroll();
  const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('669244cd00205111adc6');
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
      duration: 0.2,
      stagger: 0.2,
    });
  });

  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
