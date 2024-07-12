// Card.jsx
import React, { useEffect, useRef } from 'react';

function Card({ video, thumbnail, title, description, id }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleMouseEnter = () => {
      videoElement.style.opacity = 1;
      videoElement.play();
    };

    const handleMouseLeave = () => {
      videoElement.style.opacity = 0;
      videoElement.load();
    };

    videoElement.addEventListener('mouseenter', handleMouseEnter);
    videoElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      videoElement.removeEventListener('mouseenter', handleMouseEnter);
      videoElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="bg-[#111] w-[48%] h-[65vh]">
      <div className="w-[100%] h-[100%] rounded-2xl flex justify-evenly items-center flex-col">
        <div
          className={`overflow-hidden border w-full h-[70%] relative rounded-2xl bg-[url('${thumbnail}')] bg-cover bg-center bg-no-repeat flex justify-end flex-col`}
        >
          <video
            ref={videoRef}
            id={id}
            className="absolute h-full z-0 w-full opacity-0 object-cover"
            src={`${video}`}
          ></video>
          <div className="text-white text-xl z-10 p-[1vh]">{title}</div>
        </div>
        <div className="w-full h-[30%] overflow-hidden text-white text-sm">
          <div className="text-lg font-medium w-full p-[1vh]">About</div>
          <div className="px-[0.5vh]">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
