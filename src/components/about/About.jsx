import React from "react";

function About() {
  return (
    <div>
      <div className="w-full flex flex-col bg-[#111] items-center text-white">
        <div className="h-[15vh]"></div>
        <div className="w-[80%]  ">
          <div className=" flex justify-between">
            <div className="h-[30vh]  text-[158px]  flex font-[BebasNeue] justify-center items-center">
              ABOUT US.
            </div>
            {/* <div className="h-[30vh]  text-9xl font-semibold flex justify-center items-center">{`</DIV>`}</div> */}
          </div>
          <div className="">
            <p>Hay.</p>
            <p>
              I am Harsh Jha i create this website in every aspects like design
              and Development Frontend and Backend everything i use basics of
              HTML, CSS, JAVASCRIPT, to use React and for styling i use Tailwind
              in react i use multiple outsourced libraries like React Router
              Dom, GSAP, Locomotive, Scroll Trigger, Axios, and for Backend i
              used Node with multiple elements like Express, MongoDB, ejs,
              Cookie Parser, Bcrypt, Jsonwebtoken, Crypto, Cors, Body Parser,
              Mongoose, Multer
            </p>
            <div className="flex justify-between mt-[2vw]">
              <div className=" w-[50vw]  p-[1vw]">
                <p>
                  HTML, CSS, and JavaScript form the foundation of web
                  development, with HTML structuring content, CSS styling it,
                  and JavaScript adding interactivity. React is a JavaScript
                  library for building user interfaces, while Tailwind CSS
                  provides utility-first CSS for rapid UI development, and GSAP
                  (GreenSock Animation Platform) enables advanced animations.
                  Node.js allows JavaScript to run server-side, Express is a
                  Node.js framework for building web applications, and MongoDB
                  is a NoSQL database for storing data. React Router DOM manages
                  navigation in React apps, Locomotive Scroll and ScrollTrigger
                  enhance scrolling animations. Axios is a promise-based HTTP
                  client, EJS (Embedded JavaScript) is a templating language,
                  and Cookie-Parser parses cookies. Express also uses bcrypt for
                  password hashing, jsonwebtoken for authentication, crypto for
                  encryption, cors for cross-origin requests, and body-parser
                  for parsing request bodies. Mongoose is an ODM for MongoDB,
                  and multer handles file uploads.
                </p>
              </div>
              <div className="w-[30vw] border p-[1vw] ">
                <p className=" w-full text-center">HTML CSS JavaScript</p>
                <ul className="flex justify-evenly ">
                  <ul>
                    <p>Frontend</p>
                    <li>React</li>
                    <ul>
                      <li>React Router DOM</li>
                      <li>GSAP</li>
                      <ul>
                        <li>Locomotive Scroll</li>
                        <li>Scroll Trigger</li>
                      </ul>
                      <li>Axios</li>
                    </ul>
                    <li>Tailwind CSS</li>
                  </ul>
                  <ul className="flex flex-col justify-center items-center">
                    <p>Backend</p>
                    <li>Node.js</li>
                    <ul className="flex justify-evenly">
                      <ul className="p-1">
                        <li>Express</li>
                        <li>crypto</li>
                        <li>bcrypt</li>
                        <li>Cookie-Parser</li>
                        <li>jsonwebtoken</li>
                      </ul>
                      <ul className="p-1">
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>EJS</li>
                        <li>cors</li>
                        <li>Body-parser</li>
                        <li>multer</li>
                      </ul>
                    </ul>
                  </ul>
                </ul>
              </div>
            </div>

            {/* html css javascript react tailwind gsap node express mongodb
            react-router-dom locomotive-scroll scroll-triger axios ejs
            cookie-parser express bcrypt jsonwebtoken crypto cors body-parser
            mongoose multer */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
