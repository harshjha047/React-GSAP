import React from 'react'
import Page4 from './Page4'

function PageBase4() {
    const page4Data = [
        {
            id : "vid",
            title : "Hello World",
            dis : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sint reiciendis cupiditate reprehenderit, incidunt doloribus sequi quas deleniti, quam fugit maxime ut iure asperiores. Architecto laudantium non sint fugit hic.",
            thumbnail : "https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65a93ac90b586168e5917ac8_Rhea%20-%20cover_horizontal_low.webp",
            video : "https://lazarev.kiev.ua/cases/la24/accern-rhea-cover-big.mp4",
        },
        {
            id : "a",
            title : "Hello World",
            dis : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sint reiciendis cupiditate reprehenderit, incidunt doloribus sequi quas deleniti, quam fugit maxime ut iure asperiores. Architecto laudantium non sint fugit hic.",
            thumbnail : "https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65a93ac90b586168e5917ac8_Rhea%20-%20cover_horizontal_low.webp",
            video : "./video/backgroundVideo.mp4",
        },
]
  return (
    <div> 
        {
            page4Data.map((data) =>(
                <Page4 
                  key = {data.id}
                  id = {data.id}
                  title = {data.title}
                  dis = {data.dis}
                  thumbnail = {data.thumbnail}
                  video = {data.video}
                 />
            ))}
      
    </div>
  )
}

export default PageBase4