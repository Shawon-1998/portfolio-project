import React from 'react'
import Flex from './Flex'

import { FaComputer } from "react-icons/fa6";
import Container from './Container';
import { FaGithubAlt } from "react-icons/fa";
const ProjectCardSec = ({ImgSrc, item1, item2, item3, item4, projectName,link1,link2, description }) => {
    return (
        <>
            <Container>
                <div className=' card h-120  pb-3 w-88 text-center shadow-[0_0_20px] rounded-xl hover:scale-110 transition-all linear 0.3s '>
                    <img src={ImgSrc} className='full rounded-t-xl' alt="" />
                    <div className='flex gap-3 mt-5 justify-centerpt-3  pb-5 ms-5'>
                        <h3>{item1}</h3>
                        <h3>{item2}</h3>
                        <h3>{item3}</h3>
                        <h3>{item4}</h3>
                        
                    </div>
                    <h2 className='text-3xl font-semibold'>{projectName}</h2>
                    <p className='pt-5 pb-6'>{description}</p>
                    <Flex>
                        <button className='border hover:bg-secondary hover:text-primary  rounded-lg px-6 py-1 block mx-auto'><a className='flex  items-center gap-4' target="_blank" href={link1}><FaComputer /><span>Live</span></a></button>
                        <button className='border hover:bg-secondary hover:text-primary  rounded-lg px-6 py-1 block mx-auto'><a className='flex items-center gap-4' target="_blank" href={link2}><FaGithubAlt /><span>Repo</span></a></button>
                    </Flex>
                </div>
            </Container>
        </>
    )
}

export default ProjectCardSec
