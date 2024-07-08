import React from 'react'

function Footer() {
  return (
    <div>
         <footer className='h-[100vh] w-[100%] text-white  flex justify-center items-center'>
            <div className="w-[80vw] h-[100vh] flex flex-col ">
                <div className=" "></div>
            <div className="w-full h-[50vh] flex ">
                <div className="text-[6vw] leading-[6.2vw] font-bold w-[60%] h-full  ">
                    <h1>Have a project in mind? <br/> Contact Us! </h1>
                    </div>
                <div className="w-[40%] h-full "></div>
            </div>
            <div className="w-full h-[50vh] flex ">
                <div className=" w-[50%] h-full  ">
                    <div className=" flex pb-7 items-end h-full">
                    <ul className='font-semibold text-base'>
                        <h4>Harsh</h4>
                        <h4>Instagram</h4>
                        <h4>Linked In</h4>
                        <h4>GitHub</h4>
                    </ul>
                    </div>
                </div>
                <div className="w-[50%] h-full "></div>
            </div></div>
        </footer>
    </div>
  )
}

export default Footer