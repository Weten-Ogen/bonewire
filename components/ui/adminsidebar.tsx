'use client'
import { cn } from '@/lib/utils'
import { adminsidebarprops } from '@/types/next'
import React from 'react'
import { TypographyBlockquote } from '../typography/blockQuote'
import staticlist from '@/constants/staticlist'
import NavLinks from './navlinks'
import Image from 'next/image'
import icons from '@/constants/icons'
import { TypographyP } from '../typography/typoP'
import { Button } from '@/components/ui/button'


const AdminSideBar = ({className}:adminsidebarprops) => {
  return (
    <div className={cn('w-[300px] fixed hidden md:block bg-gray-200 h-screen pt-2',className)}>
      <TypographyBlockquote 
      className='text-xl font-extrabold'
      content="Bonewire"
      />
      <div className='mt-8 p-4'>
        { staticlist.adminnavlinklist.map(item => {
                return (
                <NavLinks
                 key={item.reff + item.label} 
                 label={item.label}
                  navicon={item.navicon}
                  reff={item.reff}
                  className='flex items-center gap-4 mt-6 ml-2 font-medium'
                  iconsClass=''      
                />)
            }
        )
        }
      </div>
      <div className='absolute flex items-center gap-16 justify-between  bottom-0 p-8'>
                    <TypographyP 
                    content={"Log Out"}
                    className=''
                    />
                    
                    <Button className='bg-white hover:bg-white'>
                        <Image
                        width={18}
                        height={18}
                        alt={"logout icon"}
                        src={icons.logout}
                        className=''
                        />
                    </Button>
                </div>
    </div>
  )
}

export default AdminSideBar
