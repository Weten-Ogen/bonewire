// "use client"
// import React from 'react'
// import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from './sheet'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { Button } from './button'


// const MobileNav = () => {
//     return ( 
//     <div className='md:hidden'>
//         <Sheet>
//         <SheetTrigger>
//             <Image 
//             src={""}
//             alt={"menu icon"}
//             height={30}
//             width={30}
//             />
//         </SheetTrigger>
//         <SheetContent className='max-w-[70%]' side="left">
//         <SheetClose asChild>
//             <nav className='flex flex-col  items-between gap-4 relative h-[95%]'>

//                 <Image 
//                 width={30}
//                 height={30}
//                 src={icons.logo} 
//                 alt="logo icon"
//                 className='absolute -inset-4'
//                 />
            
//                 <div className='flex-1 items-center justify-center gap-2 mt-4'>
                   
//                 </div> 
//                     {/* log out session  */}
//                 <div className='absolute flex gap-16 bottom-0 px-2'>
//                     <p className='text-lg uppercase'>log out</p>
                    
//                     <Button className='bg-white hover:bg-white'>
//                         <Image
//                         width={18}
//                         height={18}
//                         alt={"logout icon"}
//                         src={icons.logout}
//                         className=''
//                         />
//                     </Button>
//                 </div>   
//                 </nav>
//         </SheetClose>
//         </SheetContent>
//     </Sheet>
// </div>
//   )
// }

// export default MobileNav
