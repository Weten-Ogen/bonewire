// navbar links list

import { navlinklistprops } from "@/types/next";

  
const  navlinklist:navlinklistprops[] = [
    {
        label: 'Home',
        reff : '/',
        navicon: '/assets/icons/home.svg'
    },
    {
        label: 'Dashboard',
        reff: '/dashboard',
        navicon: '/assets/icons/monitor.svg'
    },
    {
        label: 'Cart',
        reff: '/cart',
        navicon: '/assets/icons/cart.svg'
    },
    {
        label:'Admin',
        reff:'/admin',
        navicon: '/assets/icons/admin.svg'
    },
    {
        label:'About',
        reff: '/about',
        navicon: '/assets/icons/aboutus.svg'

    }
]


const filterlist  = [
    {
        label:'all'
    },
    {
        label:'footwear'
    },
    {
        label:'sash'
    },
    {
        label:'bag'
    },
    {
        label:'wristband'
    },
    {
        label:'kente'
    },
    {
        label:'purse'
    },
    
]

const fakeproducts = [
    {
        id: "1",
        imageurl: "/assets/images/bag1.jpg",
        label:"School Bag",
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est quis doloremque sequi deleniti, vitae consequuntur vero cumque pariatur voluptatibus?",
        tags : 'bag',
    },
    {
        id: "2",
        imageurl: "/assets/images/footwear1.jpg",
        label:"foot wear",
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est quis doloremque sequi deleniti, vitae consequuntur vero cumque pariatur voluptatibus?",
        tags : 'footwear',
    },
    {
        id: "3",
        imageurl: "/assets/images/ladybag1.jpg",
        label:"lady purse",
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est quis doloremque sequi deleniti, vitae consequuntur vero cumque pariatur voluptatibus?",
        tags : 'purse',
    },
    {
        id: "43",
        imageurl: "/assets/images/purse1.jpg",
        label:"Purse",
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est quis doloremque sequi deleniti, vitae consequuntur vero cumque pariatur voluptatibus?",
        tags : 'purse'
    },
    {
        id: "52",
        imageurl: "/assets/images/bands.jpg",
        label:"wristBands",
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est quis doloremque sequi deleniti, vitae consequuntur vero cumque pariatur voluptatibus?",
        tags : 'wristband',
    },
]

const products = [
    {
        id: "14",
        imageurl: "https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/25C06617-F3C5-463E-8579-7256CD63B1B5-wPzwGsoGbHSVanTnXD56kN5LyI5TIP.jpeg",
        label:"Triangles",
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est quis doloremque sequi deleniti, vitae consequuntur vero cumque pariatur voluptatibus?",
        tags : 'kente',
        price: 2000,
        gender: "all",
        count: 0    
    },
    {
        id: "23",
        imageurl: "https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/1C1B27BB-2D04-4238-BD2D-B1453B9651B3-gvUWY8TuCrKjU6PnCCAugXsHy9y8Q7.jpeg",
        label:"Gye Nyame",
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est quis doloremque sequi deleniti, vitae consequuntur vero cumque pariatur voluptatibus?",
        tags : 'kente',
        price: 3000,
        gender: "M",
        count: 0
    },
    {
        id: "21",
        imageurl: "https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/9A95ABB7-0014-4A3F-980F-9A53E81129EA-PprpnvzIIHURpntt2INsabXnUlQtm3.jpeg",
        label:"Ahenema",
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est quis doloremque sequi deleniti, vitae consequuntur vero cumque pariatur voluptatibus?",
        tags : 'footwear',
        price: 2000,
        gender: "all",
        count:0
    },
    {
        id: "4",
        imageurl: "https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/958137E6-BB2C-4389-962B-881069E77112-WxLcY9OlfZ5VmD1y4FrCcMy0g7iSAY.jpeg",
        label:"Shinies",
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est quis doloremque sequi deleniti, vitae consequuntur vero cumque pariatur voluptatibus?",
        tags : 'kente',
        price: 2000,
        gender: "all",
    },
    {
        id: "54",
        imageurl: "https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/A8CCB1A1-BB58-4C57-AE55-F114214FD5D8-dDJcVZ2Cm9jQXFI9kPxT1jycpQZTB9.jpeg",
        label:"Unbury",
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est quis doloremque sequi deleniti, vitae consequuntur vero cumque pariatur voluptatibus?",
        tags : 'wristband',
        price: 2000,
        gender: "all",
        count:0
    },
    {
        id: "666",
        imageurl: "https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/958137E6-BB2C-4389-962B-881069E77112-WxLcY9OlfZ5VmD1y4FrCcMy0g7iSAY.jpeg",
        label:"Shinies",
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est quis doloremque sequi deleniti, vitae consequuntur vero cumque pariatur voluptatibus?",
        tags : 'purse',
        price: 2000,
        gender: "all",
    },
]

export default {navlinklist,filterlist,fakeproducts,products}