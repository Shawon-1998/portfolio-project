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
     <div id='Skill' className='lg:mb-20 mb-10'>
         <h1 className='lg:mt-15 mt-8 mb-3 lg:mb-7'>Skills</h1>
        <div className='lg:flex justify-center lg:gap-20'>
           <div className='shadow-[0_0_10px] mb-15 lg:mb-0 lg:mx-0 mx-10 rounded-lg lg:p-10 p-5 transition-all 3s linear hover:scale-110'>
        <h2 className='text-4xl my-10'>Frontend_skill</h2>
          <span className='flex mb-10 gap-15'>
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
        <div className='shadow-[0_0_10px] lg:mx-0 mx-10 rounded-lg lg:p-10 p-5 transition-all 3s linear hover:scale-110'>
        <h2 className='text-4xl my-10'>Tools</h2>
          <span className='flex mb-10 gap-15'>
        
            <Git />
            <FireBase />
            <VsCode />
          </span>
          <span className='flex mb-10 gap-15'>
                <Github />
            {/* <Figma /> */}
            <Netlify />
            <Vercel />
          </span>
        </div>
        </div>
     </div>
      </Container>
    </>
  )
}

export default Skill
