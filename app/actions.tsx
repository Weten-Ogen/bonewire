'use server '

import { auth } from "@/auth"


export async function signoutwithGoogle(){

}
export async function getSession (){
    const user = await auth()
    return user
}