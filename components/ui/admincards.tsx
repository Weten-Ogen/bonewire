"use client"
import { Item } from '@radix-ui/react-select'
import { LucideIcon } from 'lucide-react'
import React from 'react'
import { TypographyMuted } from '../typography/muted'
import { cn } from '@/lib/utils'
import { admincard } from '@/lib/constants'
import { Card, CardContent } from './card'
import { TypographyH3 } from '../typography/h3'
import Link from 'next/link'

interface admincardprops {
    className?: string,
    
  

}

const AdminCards = (props: admincardprops) => {
  return (
    <div className={cn('p-8',props.className)}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
        {
          admincard.map(item => {
            return (
              <Link href={item.href} key={item.label}> 
              <Card>
                <CardContent className='flex flex-col items-center'>
                  <div className='p-8'>
                    <item.icon  size={72}/>
                  </div>
                  <TypographyH3 className=''>
                    {item.label}
                  </TypographyH3>
                </CardContent>
              </Card>
              </Link>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default AdminCards
