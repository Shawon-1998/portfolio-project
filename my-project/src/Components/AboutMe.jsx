import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Img from '../assets/logo.png'

const AboutMe = () => {
    return (
        <>
            <Container >
                <div id='AboutMe' className='  anima '>
                    <h1 className='text-center text-6xl mb-5 '>About Me</h1>
                    <div className='py-25 mt-15 w-full shadow-[0_0_100px] rounded-lg text-secondary font-primary  '>
                        <div className='w-full  flex gap-20 justify-center'>
                            <div className='w-[50%]'>
                                <img src={Img} className='h-100 hover:scale-180 transition-all 0.53 linear ' alt="" />
                            </div >
                            <div className='w-[50%] '>
                                <h4 className='text-2xl font-semibold'>Who I Am</h4>
                                <h3 className='text-4xl font-semibold leading-13  py-6'>My name is <span className='block text-transparent text-4xl font-bold uppercase bg-[url(assets/sunset-2180346.jpg)] bg-no-repeat bg-cover bg-center bg-clip-text anime font-primary'>Billal <span className='block'>Hossain Shawon</span></span> and I am a frontend developer</h3>
                                <p className='text-lg'>I am currently learning frontend development with React and continuously improving my skills by practicing and exploring new technologies to strengthen my development practices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default AboutMe
