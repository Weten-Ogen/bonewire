import { LoaderPinwheel } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex item-center justify-center mt-20'>
      <LoaderPinwheel 
      size={72}
      className=" animate-spin "
       />
    </div>
  )
}

export default Loading
