import React, { useEffect, useRef } from 'react'

function MenuElem({link,titel,id}) {
    const menuRef=useRef()
    useEffect(()=>{
        menuRef.current.addEventListener('mouseenter',()=>{
            gsap.to(menuRef.current, {
                duration:0.5,
                background:'#fff'
            })
        })
        menuRef.current.addEventListener('mouseleave',()=>{
            gsap.to(menuRef.current, {duration:0.5, scale:1})
        })
     },[]
    )
  return (
    <div>
        {/* <a className="w-full h-[10vh] bg-white" link={`/`}>
        <div id={`home`} ref={menuRef} className="w-full h-[10vh] border uppercase text-white text-4xl font-semibold px-[3vh] py-[1vh] ">Home</div>
        </a> */}
        <a className="w-full h-[10vh] bg-white" href={`${link}`}>
        <div id={`${id}`} ref={menuRef} className="w-full h-[10vh] border uppercase text-white text-4xl font-semibold px-[3vh] py-[1vh] ">{titel}</div>
        </a>

    </div>
  )
}

export default MenuElem