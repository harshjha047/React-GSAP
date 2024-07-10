import React from 'react'
import Card from './Card'

function Post() {
  return (
    <div className='bg-[#111] flex justify-center items-center'>
      <div className="">
      <div className="h-[16vh] w-full"></div>
      <div className=" flex flex-wrap w-[80vw] justify-between ">
      <Card/>
      <Card description='Hello Everyone' title='hello' thumbnail='https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'/>
      <Card/>
      <Card/>
      </div>
      </div>
      
    </div>
  )
}

export default Post