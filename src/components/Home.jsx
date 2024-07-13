import React, { useEffect } from "react";
// import gsap from "gsap";
import Elem1 from "./page2/Elem1";
import Page1 from "./page1/Page1";
import Page3 from "./page3/Page3";
// import { useGSAP } from "@gsap/react";
// import Page4 from "./page4/Page4";
import Page5 from "./page5/Page5";
import PageBase4 from "./page4/PageBase4";
// import Card from "./Card";

function Home() {
  return (
    <>
      <Page1 />
      <Elem1 />
      <Page3 />
      <PageBase4/>
      <Page5 />
      {/* <Card/> */}
    </>
  );
}

export default Home;
