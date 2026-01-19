import React from 'react'
import Container from './Container'
import BlurText from './BlurText'

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
const Introduce = () => {
  return (
    <>
      <Container>
        <BlurText
          text="👋 Hi,
            My name is
           Billal Hossain Shawon
            I am a Web Developer 💻"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-5xl mt-15 mb-25 font-semibold w-186 h-200 leading-0  mx-auto text-secondary "
        />
      </Container>
    </>
  )
}

export default Introduce
