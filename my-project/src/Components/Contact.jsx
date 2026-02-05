import React from 'react'
import Container from './Container'
import Flex from './Flex'

const Contact = () => {
  return (
    <>

       <Container>
        <div id='Contact' className= 'py-30 lg:mb-25 mx-10 lg:mx-0'>
          <h1 className='mb-10'>Contact</h1>
          <h2 className='text-4xl '> Get In Touch  </h2>
        <div className='items-start lg:flex'>
            <div className='lg:w-[40%] w-full'>
           <h4 className='text-2xl mt-10 mb-3'>Let's talk about everything!</h4>
           <p className='text-lg'>Don't like forms? Send me an email. 👋</p>
            </div>
            <form className='lg:w-[60%] w-full mt-10' action="">
               <div className='lg:flex justify-between '>
                 <label htmlFor="text"></label>
                <input type="text" className='text-primary lg:w-[50%] w-full lg:me-5  transition 0.3s hover:scale-105 lg:py-5 py-3 ps-6 lg:ps-10 rounded-full bg-secondary border outline-0 placeholder:text-primary  lg:mb-0placeholder:text-lg' placeholder='Insert your name'/>
                <label htmlFor="email"></label>
                <input type="email" className='text-primary mt-5 lg:w-[50%] w-full lg:mt-0   transition 0.3s hover:scale-105  lg:py-5 py-3 ps-6 lg:ps-10  rounded-full bg-secondary border outline-0 placeholder:text-primary placeholder:text-lg' placeholder='Insert your email'/>
               </div>
                <label htmlFor="text"></label>
                <input type="" className='text-primary lg:my-7 my-5 w-full  transition 0.3s hover:scale-105  lg:py-5 py-3 ps-6 lg:ps-10 rounded-full bg-secondary border outline-0 placeholder:text-primary placeholder:text-lg' placeholder='Insert your subject'/>

                <label htmlFor="text"></label>
                <input type="text" className='text-primary transition 0.3s w-full hover:scale-105   py-3 ps-6 lg:ps-10 pb-25  rounded-4xl bg-secondary border outline-0 placeholder:text-primary placeholder:text-lg' placeholder='Write your message'/>
            </form>
        </div>
      </div>
      </Container>
    </>
  )
}

export default Contact
