import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Footer() {
  // const homoRef = useRef()
  useEffect(() => {
    const element = document.querySelector(`#homo`);

    const handleMouseEnter = (dets) => {
      console.log(dets);
      gsap.to(`.homo`, {
        duration: 0.4,
        opacity: 1,
        scale: 1,
      });
    };

    const handleMouseMove = (dets) => {
      const rect = element.getBoundingClientRect();
      gsap.to(`.homo`, {
        x: dets.clientX - rect.x - 50,
        y: dets.clientY - rect.y - 50,
        // ease: "elastic.out(1.2,0.1)"
      });
    };

    const handleMouseLeave = (dets) => {
      console.log(dets);
      gsap.to(`.homo`, {
        duration: 0.4,
        opacity: 0,
        scale: 0,
      });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div>
      <div className="homo h-[100px] w-[100px] rounded-full bg-white opacity-0 scale-0 z-10 mix-blend-difference absolute"></div>
      <footer
        id="homo"
        className="h-[100vh] w-[100%] text-white cursor-none relative bg-[#111]  flex justify-center items-center"
      >
        <div className="h-[100vh] w-[100%] text-white mix-blend-difference z-20 absolute flex justify-center items-center">
        <div className="w-[80vw] h-[100vh] flex flex-col ">
          <div className="w-full h-[50vh] flex ">
            <div className="text-[6vw] leading-[6.2vw] font-bold w-[55%] h-full big ">
              <h1>
                Have a project in mind? <br /> Contact Us!{" "}
              </h1>
            </div>
            <div className="w-[40%] h-full "></div>
          </div>
          <div className="w-full h-[50vh] flex ">
            <div className=" w-[50%] h-full  ">
              <div className=" flex pb-7 items-end h-full">
                <ul className="font-semibold text-base ">
                  <h4>Harsh</h4>
                  <h4 className=" hover:text-green-600">Instagram</h4>
                  <h4 className=" hover:text-yellow-600">Linked In</h4>
                  <h4 className=" hover:text-[#E0F239]">GitHub</h4>
                </ul>
              </div>
            </div>
            <div className="w-[50%] h-full "></div>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
