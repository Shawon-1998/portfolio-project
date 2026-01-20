import { useState } from 'react'
import Nav from './Components/Nav'
import BgBody from './Components/BgBody'
import Introduce from './Components/Introduce'
import AboutMe from './Components/AboutMe'
import Skill from './Components/Skill'
import Service from './Components/Service'
import Project from './Components/Project'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <BgBody>
      </BgBody> */}
      <Nav />
      {/* <Introduce /> */}
      <AboutMe />
      <Skill />
      <Service />
      <Project />
      <Contact />
    </>
  )
}

export default App


{/* <div className='relative'>
       <div className='absolute z-0 '>
      <Silk />
     </div>
    <div className='z-1 relative'>
     <Nav />
    </div>
    </div> */}