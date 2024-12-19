import { cn } from '@/lib/utils'
import React from 'react'
import { TypographyH3 } from '../typography/h3'
import { TypographyP } from '../typography/p'
import { TypographyH4 } from '../typography/h4'

interface conprops {
    className?: string
    heading: string,
    subheading:string,
    parag? :string
}

const ContactUi = (props:conprops) => {
  return (
    <div className={cn('flex flex-col gap-2  ',props.className)}>
      <TypographyH3 className=' font-bold text-md font-serif uppercase'>
        {props.heading} 
      </TypographyH3>
      <TypographyH4 className='font-normal font-sans tracking-wide text-md'>
        {props.subheading}
        </TypographyH4>
      <TypographyP className='font-sans text-sm '>{props.parag && props.parag}</TypographyP>

    </div>
  )
}

export default ContactUi
