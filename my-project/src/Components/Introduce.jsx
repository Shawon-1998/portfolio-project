import React from 'react'
import Container from './Container'
import Img from '../assets/logo.png'
import Flex from './Flex';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Introduce = () => {
  return (
    <>
      <Container>
        <div className=' lg:mb-20 anima'>
          <div className='flex flex-col items-center justify-center h-150 px-5'>
            <img src={Img} className='rounded-[50%] lg:h-100 lg:w-100 h-70 w-70 hover:scale-120 transition-all ease-linear 0.4s' alt="" />
            <h3 className=' mt-15 mb-5'> <span className='block text-transparent lg:text-6xl text-2xl font-bold uppercase bg-[url(assets/sunset-2180346.jpg)] bg-no-repeat bg-cover bg-center bg-clip-text  font-primary'>Billal Hossain  Shawon</span></h3>
            <p className='text-xl lg:text-3xl mb-5'>I Am A Front-End Developer</p>
          <div className='flex gap-10 text-4xl'>
            <a target='blank' href="https://github.com/Shawon-1998"><FaGithub /></a>
           <a href="www.linkedin.com/in/billal-hossain-shawon-479361344"><FaLinkedin /></a>
           <a target='blank' href="https://www.facebook.com/share/17F8RkxhpW/"> <FaFacebook /></a>
          </div>
          </div>
        </div>

      </Container>
    </>
  )
}

export default Introduce




// <BlurText
//         text="👋 Hi,
//           My name is
//          Billal Hossain Shawon
//           I am a Web Developer 💻"
//         delay={150}
//         animateBy="words"
//         direction="top"
//         onAnimationComplete={handleAnimationComplete}
//         className="text-5xl mt-15 mb-25 font-semibold w-full h-200 leading-0  text-secondary "
//       />




