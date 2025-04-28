"use client"


import { getSession } from '@/app/actions/auth'
import { getUser } from '@/app/actions/user'
import {create} from 'zustand'
import { Session } from 'next-auth'

interface userprops {
    id: string,
    name: string,
    email: string,
    country: string,
    contactNumber:number,
    address?: string,
    createdAt: Date,
}

type userStore   =  {
    user : userprops | null,
    session:Session | null,
    getUserdetails: () => void,
}

export const useUserDetailsStore = create<userStore>((set) => ({
user : null,
session:null,
getUserdetails:async() => {
    const session = await getSession()
    const  user = await getUser(session?.user?.id as string)
    console.log(user)
    set({session})
}
}));