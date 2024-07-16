import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import MenuElem from "./MenuElem";
// import { a } from "react-router-dom";

function Header() {
  const menuElems = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Services", link: "/services" },
    { id: 4, title: "Contact", link: "/contact" },
  ]
  const navRef = useRef();
  const menuRef = useRef();

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

      // Click event for menu
      menuRef.current.addEventListener("click", () => {
        let tl = gsap.timeline();
        tl.to('#menu', {
          height:"50vh"
        })
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
          height: "9.5vh",
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
        <div id="menu" className=" h-[0px] absolute overflow-hidden w-[80%] z-50 bg-[#111] ">
            {menuElems.map((elem)=>(
              <MenuElem 
              key={elem.id}
              titel={elem.title} 
              link={elem.link} 
              id={elem.id}/>
              ))}
        </div>
        <nav
          ref={navRef}
          className="w-4/5 h-[9.5vh] mt-4 bg-[#111]  overflow-hidden border-b-[1px] border-[#ffffffad] "
        >
          <div className="w-full h-[9.5vh]  flex justify-between  text-white items-center  ">
            <div className="h-full w-[15%] flex  items-center font-bold text-xl ">
              <a  href={"/"}>{"</DIV>"}</a>
              {/* <a href=""></a> */}
            </div>
            <ul className="flex justify-evenly h-full w-3/5 font-semibold text-sm uppercase  pt-[3vh] ">
              <div className="nav-elam font-semibold text-sm">
                <a href={"/"} className="block">
                  home
                </a>
                <h5 className=" hidden translate-y-7 overflow-hidden">
                  <a href={"/"} className="overflow-hidden">
                    <p className="p text-xs">home</p>
                  </a>
                </h5>
              </div>

              <div className="nav-elam font-semibold text-sm">
                <a href={"/login"} className="">
                  login
                </a>
                <h5 className=" hidden translate-y-7 overflow-hidden">
                  <a href="/login" className="overflow-hidden flex flex-col">
                    {" "}
                    <p className="p text-xs">login</p>
                  </a>
                  <a href={"/signup"} className="overflow-hidden flex flex-col"><p className="p text-xs">sign up</p></a>
                  <a href={"/profile"} className="overflow-hidden flex flex-col"><p className="p text-xs">profile</p></a>
                </h5>
              </div>
              <div className="nav-elam font-semibold text-sm">
                <a href={"/about"} className="">
                  About Us
                </a>
                <h5 className=" hidden translate-y-7 overflow-hidden">
                  <a href={"/about"} className="overflow-hidden">
                    <p className="p text-xs">About Us</p>
                  </a>
                  <a href={"/post"} className="overflow-hidden flex flex-col"><p className="p text-xs">post</p></a>
                </h5>
              </div>
              <div className="nav-elam font-semibold text-sm">
                <a href={"/help"} className="">
                CONTECT US
                </a>
                <h5 className=" hidden translate-y-7 overflow-hidden">
                  <a href={"/help"} className="overflow-hidden">
                    <p className="p text-xs">help</p>{" "}
                  </a>
                </h5>
              </div>
            </ul>
            <div className="h-full w-[15%] flex justify-end items-center ">
              <p ref={menuRef} className="py-2 z-40 px-3 font-semibold bg-[#4D9D5B] h-[7vh] w-[7vh] text-xs rounded-full flex justify-evenly items-center">
               <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Antu_application-vnd.oasis.opendocument.text-template.svg" alt="" className="h-[4vh] w-[4vh] text-lg transition-all duration-500 hover:rotate-45"/>
              </p>
            </div>
          </div>
          <div className=" w-full  mt-[-1px] navbot"></div>
        </nav>
      </header>
    </>
  );
}

export default Header;
