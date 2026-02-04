import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBars } from "react-icons/fa";


const Nav = () => {

  const [value,setValue]=useState(true)
  
  const handleClick=()=>{
    setValue(!value)
  }

  return (
    <>
      <nav className='bg-transparent py-5 lg:px-0 px-10 '>
        <Container>
          <Flex className='justify-between lg:items-center items-start relative'>
            <h3 className='text-transparent text-3xl font-semibold uppercase bg-[url(assets/sunset-2180346.jpg)] bg-no-repeat bg-cover bg-center bg-clip-text anime font-primary'>Shawon</h3>
           
            <div className={`${value ? "lg:block hidden" :"lg:hidden block"}`}>
              <ul className='transition-all 0.1s ease-in-out text-secondary text-2xl lg:flex font-primary gap-10'>
                <li><a href="">Home</a></li>
                <li><a href="#AboutMe">About</a></li>
                <li><a href="#Skill">Skill</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#Contact">Contact</a></li>
              </ul>
            </div>

            <FaBars className='lg:hidden block cursor-pointer' onClick={handleClick}/>

          </Flex>
        </Container>
      </nav>
    </>
  )
}

export default Nav
