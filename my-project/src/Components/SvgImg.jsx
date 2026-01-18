import React from 'react'

const SvgImg = ({children,className}) => {
  return (
    <div className={`${className} w-18 h-18 text-gray-600`}>
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-full h-full"
  >
    <path d={children} />
  </svg>
</div>

  )
}

export default SvgImg
