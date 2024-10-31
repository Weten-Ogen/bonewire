"use client"
import React from 'react'
import CustomAuthField from '../ui/customauthfield'
import { FieldValues, useForm } from 'react-hook-form'
import { AuthFormSchema } from '.'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'
import { Form } from '../ui/form' 
import { Button } from '../ui/button'
import Link from 'next/link'
import { registerUser } from '@/actions/register'

const formSchema = AuthFormSchema('sign-up')

const SignUpForm = () => {
    const authform = useForm <z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email:"",
            firstName:"",
            lastName:"",
            password:"",
            country:""
        }
      }
    )
    const onSubmit  =  async(data:FieldValues) => {
      const result = await registerUser(data)
    }
    return <div className=' '>
    <Form {...authform}>
        <form className='flex flex-col  gap-8 md:w-[65%] mx-auto ' onSubmit={authform.handleSubmit(onSubmit)}>
            <CustomAuthField 
            control={authform.control}
            label="Email"
            name="email"
            placeholder="Enter your email"
            />
            <CustomAuthField 
            control={authform.control}
            label='First Name'
            name='firstName'
            placeholder='Enter your First Name.'
            />
            <CustomAuthField 
            control={authform.control}
            label='Last Name'
            name='lastName'
            placeholder='Enter your email'
            />
            <CustomAuthField 
            control={authform.control}
            label='Country'
            name='country'
            placeholder='Enter your email'
            />

            <CustomAuthField 
            control={authform.control}
            label='Password'
            name='password'
            placeholder='Enter your password'
            />
            <Link href="/signin" 
        className='text-muted-foreground cursor-pointer'>
        Click here to Log In
        </Link>
          <div className='mt-5 w-full'>
            <Button className='w-full uppercase font-bold' type="submit">submit</Button>
          </div>
        </form>
    </Form>
    </div>

}

export default SignUpForm
