import React from 'react'
import { LuPopcorn } from "react-icons/lu";

const Spinner = () => {
  return (
    <div className=' animate-spin'>
      <LuPopcorn className='w-24 h-24' />
    </div>
  )
}

export default Spinner