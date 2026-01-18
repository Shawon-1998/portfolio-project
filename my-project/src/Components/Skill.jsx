import React from 'react'
import Bootstraps from '../Svg/Bootstraps'
import Css from '../Svg/Css'
import Js from '../Svg/Js'
import Github from '../Svg/Github'
import Container from './Container'
import Git from '../Svg/Git'
import Tailwind from '../Svg/Tailwind'
import Vercel from '../Svg/Vercel'
import Html5 from '../Svg/Html5'
import ReactImg from '../Svg/ReactImg'
import Figma from '../Svg/Figma'
import FireBase from '../Svg/FireBase'



const Skill = () => {
  return (
  <>
  <Container>
     <div className='flex flex-wrap'>
    <Bootstraps />
    <Css />
    <Js />
    <Github />
    <Git />
    <Tailwind/>
    <Figma />
    <Html5/>
    <ReactImg />
    <FireBase/>
    <Vercel /> 
   </div>
  </Container>
  </>
  )
}

export default Skill
