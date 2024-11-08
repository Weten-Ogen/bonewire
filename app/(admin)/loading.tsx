import { LoaderPinwheel } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex w-full items-center mt-20 justify-center'>
      <LoaderPinwheel 
      size={72}
      className=" animate-spin "
       />
    </div>
  )
}

export default Loading
