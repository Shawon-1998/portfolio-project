import React from 'react'
import Container from './Container'
import Flex from './Flex'

const Contact = () => {
  return (
    <>
      <Container>
        <div id='Contact' className= 'anima my-25'>
          <h1 className='mb-10'>Contact</h1>
        <h2 className='text-4xl '> Get In Touch  </h2>
        <Flex className='items-start'>
            <div className='w-[40%]'>
           <h4 className='text-2xl mt-10 mb-3'>Let's talk about everything!</h4>
           <p className='text-lg'>Don't like forms? Send me an email. 👋</p>
            </div>
            <form className='w-[60%] mt-10' action="">
               <div className='flex justify-between '>
                 <label htmlFor="text"></label>
                <input type="text" className='text-primary w-[50%] me-5  transition 0.3s hover:scale-105 py-5 ps-10 rounded-full bg-secondary border outline-0 placeholder:text-primary placeholder:text-lg' placeholder='Insert your name'/>
                <label htmlFor="email"></label>
                <input type="email" className='text-primary w-[50%]  transition 0.3s hover:scale-105 py-5 ps-10  rounded-full bg-secondary border outline-0 placeholder:text-primary placeholder:text-lg' placeholder='Insert your email'/>
               </div>
                <label htmlFor="text"></label>
                <input type="" className='text-primary my-7 w-full  transition 0.3s hover:scale-105 py-5 ps-10  rounded-full bg-secondary border outline-0 placeholder:text-primary placeholder:text-lg' placeholder='Insert your subject'/>

                <label htmlFor="text"></label>
                <input type="text" className='text-primary transition 0.3s w-full hover:scale-105 pt-5 ps-10 pb-25  rounded-4xl bg-secondary border outline-0 placeholder:text-primary placeholder:text-lg' placeholder='Write your message'/>
            </form>
        </Flex>
      </div>
      </Container>
    </>
  )
}

export default Contact
