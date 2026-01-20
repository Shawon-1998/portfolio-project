import React from 'react'
import Container from './Container'
import Flex from './Flex'
import lofo from '../assets/eggs.jpg'

const Nav = () => {
  return (
    <>
      <nav className='bg-transparent py-5 '>
        <Container>
         <Flex className=''>
            <h3 className='text-transparent text-3xl font-semibold uppercase bg-[url(assets/sunset-2180346.jpg)] bg-no-repeat bg-cover bg-center bg-clip-text anime font-primary'>Shawon</h3>
          <ul className=' text-secondary text-2xl flex font-primary gap-10'>
            <li>Home</li>
            <li><a href="#Skill">Skill</a></li>
            <li ><a href="#AboutMe">About</a></li>
            <li>Project</li>
            <li>Blog</li>
          </ul>
         </Flex>
        </Container>
      </nav>
    </>
  )
}

export default Nav
