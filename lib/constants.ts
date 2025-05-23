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
    label: "kente"
    },
    {
    label: "sash"
    },
    {
    label: "accessories"
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
        label: "Products",
        icon: ShoppingBag,
        href :"admin/products"
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

const  carouselImage = [

    {
        id: '1',
        imageurl : 'https://z55xsbizyi4m9dqn.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-22%20at%209.31.57%20PM%20%283%29-4p94xZxzGXLUopQh3N4rRnZE4IeD3c.jpeg'
    },
 {
        id: '2',
        imageurl : 'https://z55xsbizyi4m9dqn.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-22%20at%209.31.57%20PM%20%284%29-XPzJhAKyzgBYB6Ovnf3uwo35DLI7ov.jpeg'
    },
     {
        id: '3',
        imageurl : 'https://z55xsbizyi4m9dqn.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-22%20at%209.31.57%20PM-pheyJtcmyF7bUzio7D1OAUsri569l1.jpeg'
    },
     {
        id: '4',
        imageurl : 'https://z55xsbizyi4m9dqn.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-22%20at%209.31.58%20PM%20%282%29-VTH82zAvdsDEVp6pp418i84TPmDMpc.jpeg'
    },
     {
        id: '5',
        imageurl : 'https://z55xsbizyi4m9dqn.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-22%20at%209.31.59%20PM-j8CtbsMKoiLYPYxT2aXD7SNWwTbYHd.jpeg'
    },
     {
        id: '6',
        imageurl : 'https://z55xsbizyi4m9dqn.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-22%20at%209.31.57%20PM%20%284%29-XPzJhAKyzgBYB6Ovnf3uwo35DLI7ov.jpeg'
    },
     {
        id: '7',
        imageurl : 'https://z55xsbizyi4m9dqn.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-22%20at%209.31.57%20PM%20%282%29-SMRIwGmRanjzL6k0f23oFLD2Fvlo3M.jpeg'
    },
     {
        id: '8',
        imageurl : 'https://z55xsbizyi4m9dqn.public.blob.vercel-storage.com/F90F0421-4A27-4AA8-98DC-B7FBCD942BD5-sufLrwLlR4oVTTi4og1RJkIuwVEOhl.jpeg'
    },
     {
        id: '9',
        imageurl : 'https://z55xsbizyi4m9dqn.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-22%20at%209.31.57%20PM%20%284%29-XPzJhAKyzgBYB6Ovnf3uwo35DLI7ov.jpeg'
    },
    {
        id: '10',
        imageurl: 'https://z55xsbizyi4m9dqn.public.blob.vercel-storage.com/D16DA946-E0F5-4BD9-824A-16AC57C4D1BB-lARllHk9vCoTAuVGrDNv0cPAshPT3j.jpeg'
    }
     
    
   
]
const testimonials = [
    {
        name: "Mr. Amos Opoku",
        imageUrl:"https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-17%20at%2005.56.23_1032923b-tIdBnvANYaeQ4P97B3ETLtlwOLweuE.jpg",
        comment:"Get value on each money spent here. Bonewire serviced my wedding garment as y'all can see.Luxury with value.It been almost a year and some month and my kente never gets old."
    },
    {
        name: "Mr. Annor Opoku",
        imageUrl:"https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-17%20at%2007.53.34_7213d0fd-uap3RaPp2F0r8ahCJxzhcio8QVT4GO.jpg",
        comment: "I know Bonewire got you covered when it about traditional african wear or goods. I am a regular here and tested first hand customer service for such great products."
    },
    {
        name: "Mrs. Rebecca Opoku",
        imageUrl:"https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-17%20at%2005.56.45_5c7d5bf9-0bc5TaOewSKqUx0G7oSleRzn5cQK5O.jpg",
        comment: "I will rephrase and say it takes Bonewire to tango in your clothings .They always on whatsapp to assit you, delivers on time making you feel like royealty. You are the boss on Bonewire. "
    },
    
]
"https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/WhatsApp%20Video%202024-12-01%20at%2010.37.45_12d88489-FmhBhtGywQRvp3QQIF0XQOVsO1Zk2y.mp4"


const foooterlinks = [  {
    label: 'home',
    reff: '/'
},
{
    label: 'about',
    reff: '/about'
},
{
    label: 'products',
    reff: '/products'
},
{
    label: 'chat us',
    reff: '/chat'
}, {
    label: 'profile',
    reff: '/profile'
},
{
    label: 'meet us',
    reff: '#hero'
}, {
    label : 'services',
    reff: '#services'
}
]
export {
    navlinks,
    filterlist,
    fakedata,
    admincard,
    foooterlinks,
    testimonials
}
