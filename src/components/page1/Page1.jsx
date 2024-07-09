import React from "react";
// import Marquee from "./Marquee";


function page1() {
  return (
    <div id="page1" className="relative flex items-center flex-col bg-[#111] ">
      <div className="h-[100vh] w-[100%] flex justify-center items-center flex-col  text-white text-[5.5vw] leading-none font-extrabold">
        <div>{"</DIV>"}</div>
        <div>UI/UX-DESIGNS</div>
        <div className="text-base font-normal flex justify-center items-center flex-col mt-7">
         <span className="block"> { "At </DIV>, we design custom websites tailored for corporate enterprises, product showcases, landing pages,"}</span>
         <span className="block"> { "and more – all with a strong focus on Conversion Rate Optimization."}</span>
        </div>
        <div className="text-sm font-normal flex">
        <span className="border-[1px] px-4 p-1 m-[1px] mt-3 rounded-2xl block">UI</span>
        <span className="border-[1px] px-4 p-1 m-[1px] mt-3 rounded-2xl block">UX</span>
        <span className="border-[1px] px-4 p-1 m-[1px] mt-3 rounded-2xl block">DESIGN</span>
        <span className="border-[1px] px-4 p-1 m-[1px] mt-3 rounded-2xl block">AI</span>
        </div>

      {/* <Marquee/> */}
      </div>
      
    </div>
  );
}

export default page1;
