import React from "react"
import {Home,ShoppingCart,ShoppingBag, User, Info, Shield, LucideEdit3, ChartArea, User2, Users, FileText, Plus, Edit, Image} from 'lucide-react'
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
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit ipsa nam mollitia alias ",
    tag:"bag"
  },
  {
    id:"2",   
    label:"defferoto",
    imageUrl:KenteImg,
    price: 5050 ,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit ipsa nam mollitia alias ",
    tag:"kente"
  },
  {
    id:"3",   
    label:"fetuds",
    imageUrl:footwear,
    price: 60030,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit ipsa nam mollitia alias ",
    tag: "footwear"
  },
  {
    id:"4",   
    label:"meaosn",
    imageUrl:AhenemaImg,
    price: 4000,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit ipsa nam mollitia alias",
    tag: "clothes"
  },
  
  
]

const admincard = [
    {
        label: "Orders",
        icon:  FileText ,
        href: 'admin/orders'
    },
    {
        label: "Images",
        icon: Image,
        href: "admin/form/file"
    },
    {
        label: "Add Product",
        icon: Plus,
        href :"admin/form/newproduct"
    },
    {
        label: "Charts",
        icon: ChartArea,
        href: 'admin/charts'
    },
    {
        label: "Users",
        icon:  Users,
        href: 'admin/users'
    },
    
]


const testimonials = [
    {
        name: "Keren Kumi",
        imageUrl:"https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/images/IMG-20241008-WA0323-goCLQ6pLnifHoOERUQkIS7oF8LkGqF.jpg?download=1",
        comment:"Your home of quality products, giving you the Ghana culture vibes and luxury of kente products"
    },
    {
        name: "Amos Opoku",
        imageUrl:"https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/images/IMG-20241008-WA0316-NO9PlUTOlhslVmi55lgYcCvmz6p8Xa.jpg?download=1",
        comment: "Your home of quality products, giving you the Ghana culture vibes and luxury of kente products"
    },
    {
        name: "Andre Tate",
        imageUrl:"https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/images/IMG-20241008-WA0317-fL8Glydzy7w5sv7XEfiI49patDNViB.jpg?download=1",
        comment: "Your home of quality products, giving you the Ghana culture vibes and luxury of kente products."
    },
    {
        name: "Rebecca Akuffo Addo",
        imageUrl:"https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/images/IMG-20241008-WA0329-nYKCrMk0RLw1BaIEYxEnYcxEVhKs9v.jpg?download=1",
        comment: "Your home of quality products, giving you the Ghana culture vibes and luxury of kente products."
    },
    {
        name: "Samira Bawumia",
        imageUrl:"https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/images/IMG-20241008-WA0325-TQHrLKHmwQYAtPiLuGuVVMktVkK8zg.jpg?download=1",
        comment:"Your home of quality products, giving you the Ghana culture vibes and luxury of kente products."
    },
    {
        name: "Jack Lorre",
        imageUrl:"https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/images/IMG-20241008-WA0323-goCLQ6pLnifHoOERUQkIS7oF8LkGqF.jpg?download=1",
        comment: "Your home of quality products, giving you the Ghana culture vibes and luxury of kente products."
    },
]


export {
    navlinks,
    filterlist,
    fakedata,
    admincard,
    testimonials
}