import { cn } from '@/lib/utils'
import React from 'react'
import SearchBtn from '../ui/searchbtn'

interface searchzoneprops {
    classsName: string,

}

const SearchZone = (props:searchzoneprops) => {
  return (
    <section className={cn('',props.classsName)}>
      <SearchBtn className='md:flex md:items-center '/>
    </section>
  )
}

export default SearchZone

 
