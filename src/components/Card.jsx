import React from 'react'

function Card({
  video= ``,
  // https://videos.pexels.com/video-files/5585939/5585939-hd_1920_1080_25fps.mp4
  thumbnail='',
  title='Hello World',
  description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quibusdam culpa delectus. Incidunt, sapiente ad, inventore etcorrupti deleniti enim ...',
  id,
}) {
  return (
    <div className='bg-[#111] w-[48%] h-[65vh] '>
      <div id={id} className="w-[100%] h-[100%]  rounded-2xl flex justify-evenly items-center flex-col">
        <div className={`border w-full h-[70%] relative rounded-2xl bg-[url('${thumbnail}')] bg-cover bg-center bg-no-repeat flex justify-end flex-col`}>
          <video className=' absolute h-full w-full object-cover' src={`${video}`}></video>
          <div className="text-white text-xl z-10 p-[1vh]">{title}</div>
          </div>
        <div className=" w-full h-[30%] overflow-hidden text-white text-sm"><div className="text-lg font-medium w-full p-[1vh]">About</div><div className="px-[0.5vh]">{description}</div></div>
      </div>

    </div>
  )
}

export default Card