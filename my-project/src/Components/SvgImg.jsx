import React from 'react'

const SvgImg = ({ children, className, ItemName }) => {
  return (
    <>
      
        <div className={`${className} w-18 h-18 hover:scale-120 text-gray-600 text-7xl `}>
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
