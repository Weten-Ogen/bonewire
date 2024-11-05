import { LoaderPinwheel } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center mt-30 mx-auto w-[90%]'>
      <LoaderPinwheel 
      size={72}
      className="animate-spin "
       />
    </div>
  )
}

export default Loading
