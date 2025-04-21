"use client"

import {create} from 'zustand'

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
    user: userprops | null,
    getUserdetails: () => void,
    deleteaccount: () => void,

}

export const useUserDetailsStore = create<userStore>((set) => ({
user : null,
getUserdetails: async() => {},
deleteaccount: () =>{},

}))