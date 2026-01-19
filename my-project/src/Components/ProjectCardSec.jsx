import React from 'react'
import Flex from './Flex'

import { FaComputer } from "react-icons/fa6";
import Container from './Container';
import { FaGithubAlt } from "react-icons/fa";
const ProjectCardSec = ({ImgSrc, item1, item2, item3, item4, projectName, description }) => {
    return (
        <>
            <Container>
                <div className=' card  pb-3 w-88 text-center shadow-[0_0_10px] rounded-xl  '>
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
                        <button className='border rounded-sm px-6 py-1 block mx-auto'><a className='flex  items-center gap-4' href=""><FaComputer /><span>Live</span></a></button>
                        <button className='border rounded-sm px-6 py-1 block mx-auto'><a className='flex items-center gap-4' href=""><FaGithubAlt /><span>Repo</span></a></button>
                    </Flex>
                </div>
            </Container>
        </>
    )
}

export default ProjectCardSec
