import React from 'react'
import Container from './Container'


const Card = ({service,description,icon,className}) => {
  return (
    <>
        <div className=" h-65 shadow-[0_0_10px] hover:text-secondary block max-w-sm p-6  rounded-base items-center hover:scale-110 transition infinity rounded-lg ">
       <div className={` text-2xl flex justify-center ${className}`}>{icon}</div>
        <h5 className="lg:mt-6 mb-2 lg:text-3xl text-2xl font-semibold tracking-tight  text-center">{service}</h5>  
    <p className="mb-6 text-lg ">{description}</p> 
</div>
    </>
  )
}

export default Card
