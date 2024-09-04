import React from 'react'
import { StaticImageData } from 'next/image'


// typography components types
interface typo {
    className?:string,
    content:any,
    
}
interface typolistprops{
    className?:string,
    content: any[] ,
    listClass?:string,
}

// Provider

interface providersprops {
    children : React.ReactNode,
    className?:string
}

// NAVBAR
interface navbarprops {
    className?: string,
}

// NAVLINKS
interface navlinks {
  className?: string ,
  label: string,
  reff: string,
  labelClass?:string,
  iconsClass?:string,
  navicon: string | StaticImport | StaticImageData,   
}

//  logo 
interface logoprops {
    className?: string,
    imageurl? : string | staticImport |staticImageData,
    label?: string,
    imageClass?:string,
    imageContainerClass?:string,
    labelClass?:string,
    
}

// AVATAR
interface avatarprops  {
    className?:string,
    avatarimageclass?:string,
    imageurl?:string,
    username?:string,
}

// constants 
interface navlinklistprops {
    label:string,
    reff: string,
    navicon?: string | saticImport | StaticImageData

}

// image with text 
interface imagewithtextprops {
    className?:string,
    content?: string,
    title?: string,
    subcontent?:string,
    imageurl : string | staticImport | StaticImageData,
    calltoaction?: string,
    actionref:string
}

// DASHBOARD COMPONENTS
interface dashboardprops {
    className?:string,

} 
// Headers
interface headersprops {
    className?:string,
    content?:string,
    subcontent?:string,
    contentClass?:string,
    subcontentClass?:string,
}
// search btn props 
interface searchbtnprops {
    className?:string,
}

// filterlinks
interface filters { 
    label: string,
}
interface filterlinksprops {
    className?:string,
    filters: filters[]
}

// horizontal scrollview
interface product {
    id: string,
    imageurl: string,
    label:string,
    content: string,
    tags : string[],
    className?:string,
    price: number,
    gender:string
} 
interface  horizontalscrollviewprops {
    className?:string,
    products: product[]
}


// cart 
interface cartprops {
    className?:string 
}

interface productcardprops {
    id: string,
    imageurl: string,
    label:string,
    content: string,
    tags : string[],
    className?:string,
    price: number,
    gender:string  
}

interface productgrid{
    products: product[]
}

