"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TypographyH2 } from "../typography/typoh2"
import { TypographyH1 } from "../typography/typoh1"
import CustomInput from "./custominput"
import { authFormSchema } from "@/lib/utils"
import { useForm } from "react-hook-form"
import { Form } from "./form"
import  {z} from "zod"
import {zodResolver} from '@hookform/resolvers/zod';

const formSchema = authFormSchema('sign-in')

export function AuthLogin() {
  const formTypes = useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues:{
      email: "",
      password:"",
      country:'',
      dateOfBirth:'',
      firstName:"",
      lastName: "",

    }
  })
  return ( 
    <div className="w-full lg:grid   lg:grid-cols-2 h-screen overflow-hidden relative">
     <Form {...formTypes}> 
      <div className="flex flex-col items-center gap-4 justify-center w-full md:w-[80%] mx-auto p-4">

        <TypographyH1
        content={'bonewire'}
        className="text-3xl capitalize"
        />

          <CustomInput 
          control={formTypes.control}
          label="Email"
          name='email'
          placeholder="enter your name"
          />
          <CustomInput
          key={"5933434u840842"} 
          control={formTypes.control}
          label="Password"
          name="password"
          placeholder="*****"
          />
          <div className="w-full ">

          <Button type="submit" className="w-full mt-5 py-6 text-lg capitalize">submit</Button>
          </div>
          
          <p className="text-2xl  text-center uppercase"> or</p>
          <div className="py-8 w-full">
            <Button  className="text-lg capitalize w-full py-6">log in with google</Button>
          </div>
            
      </div>
        <div className="hidden bg-muted lg:block">
          <Image
            src="https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/57B9C542-EA7C-4D77-B7E2-3596C349A113-3yQFYE4yA4cDmLRs1M0Ern7kujLY9y.jpeg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
        
     </Form>
    </div>
  )
}
