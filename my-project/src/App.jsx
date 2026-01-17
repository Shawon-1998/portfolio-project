import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Silk from './Components/Silk'
import Nav from './Components/Nav'
import LiquidEther from './Components/LiquidEther'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='relative'>
       <div className='absolute z-0 '>
      <Silk />
     </div>
    <div className='z-1 relative'>
     <Nav />
    </div>
    </div> */}

      <div className='h-screen bg-black w-full'>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        >
          <div className="absolute inset-0 z-20">
            <Nav />
          </div>
        </LiquidEther>

      </div>
    </>
  )
}

export default App
