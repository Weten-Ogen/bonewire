import { cn } from '@/lib/utils'
import React from 'react'
import { TypographyLarge } from '../typography/large'

interface logotextprops{
    className: string,
    text: string,
}

const LogoText = (props: logotextprops) => {
  return (
    <div className={cn('',props.className)}>
      <TypographyLarge 
       className=''>
        {props.text}
      </TypographyLarge>
    </div>
  )
}

export default LogoText
