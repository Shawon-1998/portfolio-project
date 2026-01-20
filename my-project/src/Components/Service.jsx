import React from 'react'
import Card from './Card'
import Flex from './Flex'
import Container from './Container'
import { FaComputer } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
const Service = () => {
    return (

        <>
        <Container>

        <div className='anima'>
            <h1 className='mt-15 '>What I Do</h1>
            <p className='text-center  my-5 text-lg'>I develop innovative digital solutions that meets real needs.</p>
            <Flex className='justify-center py-10 gap-20'>
                <Card
                className='text-2xl flex justify-center'
                service='Web maintainance'
                description='Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, add new functions, etc.'
                icon={  <FaTools />}
                />
                <Card
                icon={<FaComputer />}
                    service='Web development'
                    description='Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website.'
                />
            </Flex>
        </div>
        </Container>
        </>
    )
}

export default Service
