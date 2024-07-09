import React, { useEffect } from 'react'
import gsap from 'gsap'
import Elem1 from './page2/Elem1'
import Page1 from './page1/Page1'
import Page3 from './page3/Page3'
import { useGSAP } from '@gsap/react'
import Page4 from './page4/Page4'

function Home() {


  return (
    <>
    <Page1/>
    <Elem1/>
    <Page3/>
    <Page4 title='Project1' id='h'/>
    <Page4 title='Project2' id='z'/>
    </>
  )
}

export default Home