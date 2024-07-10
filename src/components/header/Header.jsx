import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Header() {
  const navRef = useRef();
  useGSAP(
    () => {
      // Mouse enter event
      navRef.current.addEventListener("mouseenter", () => {
        let tl = gsap.timeline();
        tl.to(navRef.current, {
          height: "20vh",
          duration: 0.2,
        });
        tl.to("h5", {
          display: "block",
          duration: 0.1,
        });
        tl.to("p", {
          y: 0,
          stagger: 0.05,
          opacity: 1,
        });
      });

      // Mouse leave event to reset height
      navRef.current.addEventListener("mouseleave", () => {
        let tl = gsap.timeline();
        tl.to(".p", {
          y: 25,
          stagger: 0.05,
          opacity: 0,
        });
        tl.to("h5", {
          display: "none",
          duration: 0.1,
        });
        tl.to(navRef.current, {
          height: "10vh",
          duration: 0.2,
          stagger: 0.3,
          delay: 0.3,
          ease: "power1.out",
        });
      });
    },
    { scope: navRef }
  );
  return (
    <>
      <header className="w-full h-[12vh] z-50 flex justify-evenly fixed bg-[#111]">
        <nav
          ref={navRef}
          className="w-4/5 h-[10vh] mt-4 bg-[#111]  overflow-hidden border-b-[1px] border-[#ffffffad] "
        >
          <div className="w-full h-[9.5vh]  flex justify-between  text-white items-center  ">
            <div className="h-full w-[15%] flex  items-center font-bold text-xl ">
              <Link to={"/"}>{"</DIV>"}</Link>
            </div>
            <ul className="flex justify-evenly h-full w-3/5 font-semibold text-sm uppercase  pt-[3vh] ">
              <div className="nav-elam font-semibold text-sm">
                <Link to={"/"} className="block">
                  home
                </Link>
                <h5 className=" hidden translate-y-7 overflow-hidden">
                  <Link to={"/"} className="overflow-hidden">
                    <p className="p text-xs">home</p>
                  </Link>
                </h5>
              </div>

              <div className="nav-elam font-semibold text-sm">
                <Link to={"/login"} className="">
                  login
                </Link>
                <h5 className=" hidden translate-y-7 overflow-hidden">
                  <Link to="/login" className="overflow-hidden flex flex-col">
                    {" "}
                    <p className="p text-xs">login</p>
                  </Link>
                  <Link
                    to={"/signup"}
                    className="overflow-hidden flex flex-col"
                  >
                    {" "}
                    <p className="p text-xs">sign up</p>
                  </Link>
                </h5>
              </div>
              <div className="nav-elam font-semibold text-sm">
                <Link to={"/about"} className="">
                  About Us
                </Link>
                <h5 className=" hidden translate-y-7 overflow-hidden">
                  <Link to={"/about"} className="overflow-hidden">
                    <p className="p text-xs">About Us</p>
                  </Link>
                </h5>
              </div>
              <div className="nav-elam font-semibold text-sm">
                <Link to={"/help"} className="">
                  help
                </Link>
                <h5 className=" hidden translate-y-7 overflow-hidden">
                  <Link to={"/help"} className="overflow-hidden">
                    <p className="p text-xs">help</p>{" "}
                  </Link>
                </h5>
              </div>
            </ul>
            <div className="h-full w-[15%] flex justify-end items-center ">
              <Link
                to={"/contect"}
                className="py-2 px-3 font-semibold bg-[#4D9D5B] h-[5vh] w-[20vh] text-xs rounded-full flex justify-evenly items-center"
              >
                CONTECT US
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/76/Antu_application-vnd.oasis.opendocument.text-template.svg"
                  alt=""
                  className="h-full w-1/6"
                />
              </Link>
            </div>
          </div>
          <div className=" w-full  mt-[-1px] navbot"></div>
        </nav>
      </header>
    </>
  );
}

export default Header;
