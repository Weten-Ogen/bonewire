"use server"
import { auth, signIn, signOut } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function  login(path:string) {
    await signIn('google')
   redirect(path)  
}
export async function getSession(){
    const ses =  await auth()
    return ses  
}

export async function logout() {
    await signOut()
}