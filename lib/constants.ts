import React from "react"
import {Home,ShoppingCart,ShoppingBag, User, Info, Shield} from 'lucide-react'
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

export {
    navlinks
}