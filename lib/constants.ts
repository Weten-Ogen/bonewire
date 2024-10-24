import React from "react"
import {Home,ShoppingCart,ShoppingBag, User, Info, Shield, LucideEdit3, ChartArea, User2, Users, FileText, Plus, Edit} from 'lucide-react'
import AhenemaImg from '/public/images/ahenema1.jpg'
import KenteImg  from  '/public/images/kente1.jpg'
import footwear from '/public/images/ladiesfootwear1.jpg'

const navlinks = [
    {
        label: 'Home',
        href: '/',
        imageurl: '',
        icon : Home,

    },
    {
        label: 'Products',
        href: '/products',
        imageurl: '',
        icon : ShoppingBag

    },
    {
        label: 'Cart',
        href: '/cart',
        imageurl: '',
        icon: ShoppingCart

    },
    {
        label: 'Admin',
        href: '/admin',
        imageurl: '',
        icon: Shield
    },
    {
        label : "Profile",
        href : "/profile",
        imageurl: '',
        icon: User
    },
    {
        label: 'About',
        href: '/about',
        imageurl: '',
        icon: Info

    },

]


const filterlist= [
    {
     label: "all"
    },
    {
    label: "Kente"
    },
    {
    label: "sash"
    },
    {
    label: "accessories"
    },
    {
    label: "foot wears"
    }
]

const fakedata = [
   {
    id:"1",   
    label:"Black ahenema",
    imageUrl:AhenemaImg,
    price: 400.5 ,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit ipsa nam mollitia alias "
  },
  {
    id:"2",   
    label:"defferoto",
    imageUrl:KenteImg,
    price: 5050 ,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit ipsa nam mollitia alias "
  },
  {
    id:"3",   
    label:"fetuds",
    imageUrl:footwear,
    price: 60030,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit ipsa nam mollitia alias "
  },
  {
    id:"4",   
    label:"meaosn",
    imageUrl:AhenemaImg,
    price: 4000,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit ipsa nam mollitia alias"
  },
  
  
]

const admincard = [
    {
        label: "Orders",
        icon:  FileText ,
        href: 'admin/orders'
    },
    {
        label: "Add Product",
        icon: Plus,
        href :"admin/add"
    },
    {
        label: "Charts",
        icon: ChartArea,
        href: 'admin/chart'
    },
    {
        label: "Users",
        icon:  Users,
        href: 'admin/users'
    },
    
]

export {
    navlinks,
    filterlist,
    fakedata,
    admincard
}