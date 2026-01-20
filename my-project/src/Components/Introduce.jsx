import React from 'react'
import Container from './Container'
import Img from '../assets/SHAWON.jpeg'
import Flex from './Flex';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
const Introduce = () => {
  return (
    <>
      <Container>
        <div className='relative h-screen anima'>
          <div className='absolute top-[20%] left-[40%]'>
            <img src={Img} className='rounded-[50%] ms-10 h-30 w-30 hover:scale-150' alt="" />
            <h3 className='-ms-60 mt-15 mb-5'> <span className='block text-transparent text-6xl font-bold uppercase bg-[url(assets/sunset-2180346.jpg)] bg-no-repeat bg-cover bg-center bg-clip-text  font-primary'>Billal Hossain  Shawon</span></h3>
            <p className='-ms-15 text-3xl mb-5'>I am Front-end Developer</p>
          <div className='flex gap-10 text-4xl'>
            <a target='blank' href="https://github.com/Shawon-1998"><FaGithub /></a>
           <a  href="www.linkedin.com/in/billal-hossain-shawon-479361344"><FaLinkedin /></a>
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




