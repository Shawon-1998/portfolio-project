import React from 'react'
import ProjectCardSec from './ProjectCardSec'
import Flex from './Flex'
import Container from './Container'
import img1 from '../assets/ecommerce .png'
import img2 from '../assets/insta.png'
import img3 from '../assets/corporate.png'
import img4 from '../assets/restaurant.png'
import img5 from '../assets/portfolio.png'
import Btn from './Btn'

const Project = () => {
   return (
      <>
         <Container>
            <div id='project' className=' lg:mb-20  '>
               <h1 className='mt-15 mb-6'>Project</h1>
               <div className='grid lg:grid-cols-3 mx-10 lg:mx-0 gap-y-10'>
                  <ProjectCardSec
                     ImgSrc={img1}
                     item1='React'
                     item2='Js'
                     item3='tailwind'
                     link1="https://e-commerce-project-omega-three.vercel.app/"
                     link2="https://github.com/Shawon-1998/E_Commerce-Project.git"
                     projectName='eCommerce Website'
                     description='A fully responsive modern Full Stack eCommerce website with Payments functionality'
                  />
                  <ProjectCardSec
                     ImgSrc={img3}
                     item1='React'
                     item2='Css'
                     item3='tailwind'

                     link1='https://corporate-layout-design-with-react.vercel.app/'
                     link2='https://github.com/Shawon-1998/CorporateLayout-design-with-react.git'
                     projectName='Corporate Website'
                     description='A fully responsive modern landing page website with cool features'
                  />
                  <ProjectCardSec
                     ImgSrc={img4}
                     item1='React'
                     item2='Tailwind'
                     item3='Css'
                     link1="https://restaurant-project-raw-code.vercel.app/"
                     link2='https://github.com/Shawon-1998/Restaurant-project-raw-code.git'
                     projectName='Restaurant Items'
                     description='A fully responsive modern Full Stack eCommerce website with Payments functionality'
                  />
                  <ProjectCardSec
                     ImgSrc={img2}
                     item1='Bootstrap'
                     item2='Css'
                     item3='tailwind'
                     link1="https://insta-vibe-five.vercel.app/"
                     link2='https://github.com/Shawon-1998/Insta-vibe-.git'
                     projectName='Insta-Vibe'
                     description='A fully responsive modern Full Stack eCommerce website with Payments functionality'
                  />
               </div>
               <Btn>
                  View more
               </Btn>
            </div>
         </Container>
      </>
   )
}

export default Project
