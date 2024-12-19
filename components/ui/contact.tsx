import { cn } from '@/lib/utils'
import React from 'react'
import { TypographyH3 } from '../typography/h3'
import { TypographyInlineCode } from '../typography/inline'
import { Phone } from 'lucide-react'
import ContactUi from './contactui'

interface classprops{
    className: string
}

const Contacts  = (props:classprops) => {
  return (
    <div className={cn('space-y-10 md:space-y-0 md:flex p-4 mx-auto   md:p-4 md:items-start md:justify-between md:border md:shadow-lg md:m-2 rounded-lg ', props.className)}>
      {/* call number, email ,address , !apply for  a job ,  */}
      <ContactUi 
      heading='call us on  :'
      subheading='+233599637932'
      parag='+233538587513'
      className=''
      />
      <ContactUi 
      heading='locate us at :'
      subheading='Bonewire'
      parag='Ejisu, Ashanti-Region, Ghana'
      className=''
      />
      
      <ContactUi 
      heading='email us at :'
      subheading='bonewire@gmail.com'
      parag=''
      className=''
      />
    </div>
  )
}

export default Contacts 
