import React from "react";
import ProfileCard from "./ProfileCard";

function Profile() {
  return (
    <div className="pt-[12vh] flex items-center flex-col bg-[#111] text-white">
      <div className="w-[80%]">
        <div className="h-[85vh] w-[100%] flex relative items-center  border-b-2">
          <div className="h-[100%] w-[20%] bg-[#0BA35E] "></div>
          <div className="h-[85vh] w-[60%]  flex items-center justify-center absolute">
            <div className="h-[75vh] w-[75vh]  ">
              <img
                src="https://i.ibb.co/2YwXRn4/IMG-20240308-105214-721.jpg"
                alt=""
                className="h-[75vh] w-[75vh]  object-cover"
              />
            </div>
          </div>
          <div className="h-[100%] w-[80%] flex ">
            <div className="h-[100%] w-[50%] "></div>
            <div className="h-[100%] flex justify-evenly flex-col w-[50%] ">
              <div className=" h-[75vh] flex justify-between flex-col w-[100%]">
                <div className="w-full h-[%]  flex items-start ">
                  <div className=" uppercase px-[2vh] py-[0.4vh] bg-[#FFF] font-medium text-black ">
                    developer
                  </div>
                </div>
                <div className="w-full h-[55%] flex justify-evenly items-center flex-col ">
                  <div className="w-full h-[30%] text-6xl font-medium ">
                    Harsh Jha
                  </div>
                  <div className="w-full h-[50%] ">
                    I am looking for a frontend developer internship or job i
                    want to grow in my field of software engineering and toward
                    full stack developer by this internship or job i will start
                    my carrier as a frontend developer and move for full stack
                    development and more about software engineering
                  </div>
                  <div className="w-full h-[20%] flex items-center ">
                    <div className=" rounded-3xl  px-[2vh] py-[0.4vh] bg-[#FFF] font-medium text-black ">
                      Edit
                    </div>
                    <div className=" rounded-3xl ml-[1vw] px-[2vh] py-[0.4vh] bg-[#FFF] font-medium text-black ">
                      More
                    </div>
                  </div>
                </div>
                <div className="w-full h-[30%] border text-8xl flex flex-col items-center p-[1vh] text-[#2b2b2b] font-semibold">
                  none
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="w-[80%] ">
        <ProfileCard />
      </div>
    </div>
  );
}

export default Profile;
