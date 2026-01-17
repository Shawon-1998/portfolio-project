import React from 'react'
import Container from './Container'

const Nav = () => {
  return (
    <>
      <nav className='bg-transparent py-5'>
        <Container>
          
          <ul className=' text-white text-lg flex gap-4'>
            <li>Home</li>
            <li>Skill</li>
            <li>Project</li>
            <li>Experience</li>
            <li>Blog</li>
          </ul>
        </Container>
      </nav>
    </>
  )
}

export default Nav
