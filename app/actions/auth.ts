"use server"
import { auth, signIn, signOut } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function  login(path:string) {
    await signIn('google')
    revalidatePath(path)   
}
export async function getSession(){
    const ses =  await auth()
    return ses  
}

export async function logout() {
    await signOut()
}