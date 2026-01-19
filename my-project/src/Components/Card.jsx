import React from 'react'
import Container from './Container'


const Card = ({service,description,icon,className}) => {
  return (
    <>
        <div className="bg-primary h-65 hover:bg-orange-400 hover:text-primary block max-w-sm p-6  rounded-base items-center hover:scale-110 transition infinity rounded-lg shadow-2xl">
       <div className={` text-2xl flex justify-center ${className}`}>{icon}</div>
        <h5 className="mt-6 mb-2 text-3xl font-semibold tracking-tight  text-center">{service}</h5>  
    <p className="mb-6 text-lg ">{description}</p> 
</div>
    </>
  )
}

export default Card
