import React from 'react'

const SvgImg = ({ children, className, ItemName }) => {
  return (
    <>
      
        <div className={`${className} lg:w-18 lg:h-18 h-10 w-10 hover:scale-120 text-2xl lg:text-7xl `}>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <path d={children} />
          </svg>
        </div>
          <h3 className='mt-2'>{ItemName}</h3>
      
    </>

  )
}

export default SvgImg
