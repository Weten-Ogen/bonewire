"use client"
import React from 'react'
import { Form } from '../ui/form'
import { AuthFormSchema } from '.'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import CustomAuthField from '../ui/customauthfield'
import { Button } from '../ui/button'
import {z} from 'zod'
import Link from 'next/link'
import { loginUser } from '@/actions/login'

const formSchema = AuthFormSchema('sign-in')

const SignInForm = () => {
  
  const form = useForm <z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })
  const handlelogin = async(values:FieldValues) =>{
    const res = await loginUser(values)

  }
  
  
  return (
    <Form {...form}>
      <form 
      className='flex flex-col mt-10 gap-5 md:w-[65%] mx-auto'
      onSubmit={form.handleSubmit(handlelogin)}
      >
        <CustomAuthField 
         control={form.control}
         name="email"
         label="Email"
         placeholder='Enter your Email'
        />
        <CustomAuthField
        control={form.control}
        name='password'
        label="Password"
        placeholder='Enter your Password'
        />
        <div>
        <Link href="/signup" 
        className='text-muted-foreground  cursor-pointer'>
        Click here to Sign Up
        </Link>
      </div>
        <div className='w-full'>
        <Button type="submit" className='w-full mt-10'>Submit</Button>
        </div>
      </form>
    </Form>
  )
}

export default SignInForm
