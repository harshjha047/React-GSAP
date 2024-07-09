import React, { useEffect } from 'react'
import {useGSAP} from '@gsap/react'

function Page4({
    id="vid",
    title="Hello World",
    dis="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sint reiciendis cupiditate reprehenderit, incidunt doloribus sequi quas deleniti, quam fugit maxime ut iure asperiores. Architecto laudantium non sint fugit hic.",
    thumbnail="https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65a93ac90b586168e5917ac8_Rhea%20-%20cover_horizontal_low.webp",
    video="https://lazarev.kiev.ua/cases/la24/accern-rhea-cover-big.mp4",
}) {
    useGSAP(()=>{

    })
    useEffect(()=>{
        const over = document.querySelector(`#${id}`)

        const overVid =()=>{
            over.style.opacity=1;
            over.play()
        }
        const notOverVid =()=>{
            over.style.opacity=0;
            over.load()
        }
        over.addEventListener("mouseenter", overVid);
        over.addEventListener("mouseleave", notOverVid);
        return()=>{
            over.removeEventListener("mouseenter", overVid);
            over.removeEventListener("mouseleave", notOverVid);
        }
    },[])
    console.log(id)
  return (
    <div className='bg-[#fff] text-black'>
        <div className="h-[75vh] w-full flex justify-center  items-center ">
            <div className="h-[80%] w-[80%] flex justify-between items-center">
                <div className="h-full w-[26%] border-t-2 border-black">
                    <div className=" flex items-center font-semibold text-3xl h-1/6">{title}</div>
                    <div className=" h-5/6 pt-6">{dis}</div>
                </div>
                <div className="h-full w-[70%] relative ">
                <div className={`h-full w-full bg-cover bg-center bg-no-repeat bg-[url('${thumbnail}')]`}>
                <video id={id} className='h-full w-full object-cover absolute z-10' muted src={video} ></video>
                </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page4