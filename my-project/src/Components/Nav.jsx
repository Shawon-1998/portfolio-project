import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Nav = () => {

  const [value,setValue]=useState(true)
 

  return (
    <>
      <nav className='bg-transparent py-5 lg:px-0 px-10 '>
        <Container>
          <Flex className='justify-between lg:items-center items-start'>
            <h3 className='text-transparent text-3xl font-semibold uppercase bg-[url(assets/sunset-2180346.jpg)] bg-no-repeat bg-cover bg-center bg-clip-text anime font-primary'>Shawon</h3>
            <div className='relative'>
              <ul className={`${value ? "lg:block hidden":"lg:hidden block"}  list transition-all duration-700 lg:static absolute  top-0 right-0 ease-in-out mt-10 text-secondary lg:text-2xl text-base lg:flex font-primary gap-10 `}>
                <li><a href="#Home">Home</a></li>
                <li><a href="#AboutMe">About</a></li>
                <li><a href="#Skill">Skill</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#Contact">Contact</a></li>
              </ul>
            </div>
          { value ?
            <FaBars className='lg:hidden block cursor-pointer
            text-lg mt-3' onClick={()=>setValue(!value)}/> :
           <IoCloseSharp className='lg:hidden block cursor-pointer
            linear rotate-0 mt-3 text-2xl'onClick={()=>{setValue(!value)         
            }}/>
          }
          </Flex>
        </Container>
      </nav>
    </>
  )
}

export default Nav
