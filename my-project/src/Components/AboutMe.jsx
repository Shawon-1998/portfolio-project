import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Img from '../assets/logo.png'

const AboutMe = () => {
    return (
        <>
            <Container >
                <div id='AboutMe' className='py-25 w-full shadow-2xl rounded-lg text-secondary font-primary   anima  '>
                    <h1 className='text-center text-6xl mb-5 '>About Me</h1>
                    <div className='w-full  flex gap-20 justify-center'>
                        <div className='w-120 '>
                            <h4 className='text-2xl font-semibold'>Who I Am</h4>
                            <h3 className='text-4xl font-semibold leading-13  py-6'>My name is Billal Hossain Shawon and I am a frontend developer</h3>
                            <p className='text-lg'>I am currently learning frontend development with React and continuously improving my skills by practicing and exploring new technologies to strengthen my development practices.</p>
                        </div>
                        <div >
                            <img src={Img} className='h-100 hover:scale-180 transition-all linear ' alt="" />
                        </div >
                    </div>
                </div>
            </Container>
        </>
    )
}

export default AboutMe
