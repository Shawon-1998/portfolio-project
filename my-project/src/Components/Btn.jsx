import React from 'react'

const Btn = ({children,}) => {
  return (
    <div>
         <button className='py-2 px-6 block mx-auto text-3xl border my-10 hover:bg-secondary hover:text-primary transition-all 0.3s rounded-lg'><a target="_blank" href="https://github.com/Shawon-1998?tab=repositories">{children}</a></button>
    </div>
  )
}

export default Btn
