import { useState } from 'react'
import './App.css'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import Header from './components/header/Header'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  useGSAP(()=>{
    // gsap.to(".down",{
    //   y: 300,
    //   duration:2,
    //   delay: 1
    // })
  })


  return (
    <>
    <div className="bg-[#111111] ">
    <Header/>
    <Home/>
    <Footer/>
    </div>
     
    </>
  )
}

export default App
