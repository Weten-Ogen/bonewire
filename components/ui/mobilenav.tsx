"use client"
import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from './sheet'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './button'
import icons from '@/constants/icons'
import NavLinks from './navlinks'
import Image from 'next/image'
import Logo from './logo'
import { TypographyP } from '../typography/typoP'
import staticlist from '@/constants/staticlist'
import { UseCartStore } from '@/store/cartstore'
import SignBtn from './authbtn'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'


const MobileNav = () => {
    const pathname = usePathname();
    const {count} = UseCartStore((state) =>({
        count: state.count
    }))

    return ( 
    <div className='md:hidden bg-slate-100'>
        <Sheet>
        <SheetTrigger className='flex items-center justify-between'>
            <div className='flex items-center '>
            <>
                    <SignedOut>
                    <SignInButton />
                    </SignedOut>
                    <SignedIn>
                    <UserButton />
                    </SignedIn>
            </>
                <Image 
                src={icons.menuicon}
                alt={"menu icon"}
                height={30}
                width={30}
                />
            </div>
        </SheetTrigger>
        <SheetContent className='max-w-[70%]' side="left">
        <SheetClose asChild>
            <nav className='flex flex-col  items-between gap-4 relative h-[95%]'>
                <div className='flex items-center justify-between gap-8'>

                    <Logo 
                    className=''
                    label='Bonewire'
                    />
                    

                </div>
            
                <div className='flex-1 items-center justify-center gap-2 mt-4'>
                    {staticlist.navlinklist.map(item => {

                            return( <Link 
                            key={item.label + item.navicon} 
                            href={item.reff}>
                                <div className={`${pathname === item.reff ? "text-primary opacity-100 text-lg" : "opacity-50 text-sm"} flex items-center my-10 gap-4 uppercase `}>
                                    <div className='relative'>
                                    {item.label === "Cart" && <p className='absolute -top-3 -right-3'>{count}</p>}
                                        <Image
                                        src={item.navicon}
                                        width={18}
                                        height={18}
                                        alt={item.label}
                                        className=''
                                        />
                                    </div>
                                    <TypographyP  
                                    content={item.label}
                                    className=''
                                    />
                                </div>
                            </Link>
                            )
                        })
                    }
                </div> 
                    {/* log out session  */}
                <div className='absolute flex gap-16 bottom-0 px-2'>
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
                </nav>
        </SheetClose>
        </SheetContent>
    </Sheet>
</div>
  )
}

export default MobileNav
