import { useEffect, useRef, useState } from 'react'
import Nav from './Components/Nav'
import BgBody from './Components/BgBody'
import Introduce from './Components/Introduce'
import AboutMe from './Components/AboutMe'
import Skill from './Components/Skill'
import Service from './Components/Service'
import Project from './Components/Project'
import Contact from './Components/Contact'

  function App() {
  const sections = [Nav,Introduce, AboutMe, Skill, Service, Project, Contact]
  const refs = sections.map(() => useRef(null))
  const [visible, setVisible] = useState(sections.map(() => false))

  useEffect(() => {
    const onScroll = () => {
      setVisible(refs.map(ref => {
        if (!ref.current) return false
        const { top, bottom } = ref.current.getBoundingClientRect()
        const height = window.innerHeight
        return top < height * 0.85 && bottom > 0
      }))
    }

    window.addEventListener('scroll', onScroll)
    onScroll() // initial check
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    
      {sections.map((Section, i) => (
        <div
          key={i}
          ref={refs[i]}
          className={`transition-all duration-1500 ease-out ${
            visible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-50'
          }`}
        >
          <Section />
        </div>
      ))}
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