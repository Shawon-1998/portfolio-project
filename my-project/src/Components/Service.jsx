import React from 'react'
import Card from './Card'
import Flex from './Flex'
import Container from './Container'

const Service = () => {
    return (

        <>
        <Container>

        <div className='anima'>
            <h1 className='mt-8 '>What I Do</h1>
            <p className='text-center my-5 text-lg'>I develop innovative digital solutions that meets real needs.</p>
            <Flex className='justify-center gap-20'>
                <Card
                    service='Web maintainance'
                    description='Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, add new functions, etc.'
                />
                <Card
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
