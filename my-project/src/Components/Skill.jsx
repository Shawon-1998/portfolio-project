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
import Netlify from '../Svg/Netlify'
import VsCode from '../Svg/VsCode'
import Flex from './Flex'



const Skill = () => {
  return (
    <>
      <Container >
     <div className='font-primary anima '>
         <h1 className=''>Skills</h1>
        <Flex>
           <div>
        <h2 className='text-4xl my-10'>Frontend_skill</h2>
          <span className='flex gap-15'>
            <Html5 />
            <Css />
            <Tailwind />
          </span>
          <span className='flex my-10 gap-15'>
            <Bootstraps />
            <Js />
            <ReactImg />
          </span>
        </div>
        <div>
        <h2 className='text-4xl my-10'>Tools</h2>
          <span className='flex mb-10 gap-15'>
            <Github />
            <Git />
            <Figma />
          </span>
          <span className='flex gap-15'>
            <VsCode />
            <FireBase />
            <Netlify />
            <Vercel />
          </span>
        </div>
        </Flex>
     </div>
      </Container>
    </>
  )
}

export default Skill
