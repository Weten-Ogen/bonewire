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
        label:'trousers'
    },
    {
        label:'shirts'
    },
    {
        label:'bags'
    },
    {
        label:'wristband'
    },
    {
        label:'clothes'
    },
    {
        label:'purse'
    },
    {
        label:'luggage'
    }
    
]

const fakeproducts = [
    {
        id: "1",
        imageurl: "/assets/images/bag1.jpg",
        label:"School Bag",
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est quis doloremque sequi deleniti, vitae consequuntur vero cumque pariatur voluptatibus?",
        tags : ['bag','luggage'],
    },
    {
        id: "2",
        imageurl: "/assets/images/footwear1.jpg",
        label:"foot wear",
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est quis doloremque sequi deleniti, vitae consequuntur vero cumque pariatur voluptatibus?",
        tags : ['footwear'],
    },
    {
        id: "3",
        imageurl: "/assets/images/ladybag1.jpg",
        label:"lady purse",
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est quis doloremque sequi deleniti, vitae consequuntur vero cumque pariatur voluptatibus?",
        tags : ['bag','purse'],
    },
    {
        id: "4",
        imageurl: "/assets/images/purse1.jpg",
        label:"Purse",
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est quis doloremque sequi deleniti, vitae consequuntur vero cumque pariatur voluptatibus?",
        tags : ['purse','bag'],
    },
    {
        id: "5",
        imageurl: "/assets/images/bands.jpg",
        label:"wristBands",
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est quis doloremque sequi deleniti, vitae consequuntur vero cumque pariatur voluptatibus?",
        tags : ['bands','wristbands'],
    },
]

export default {navlinklist,filterlist,fakeproducts}