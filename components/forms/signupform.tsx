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
import { registerUser } from '@/app/actions/register'
import { loginUser } from '@/app/actions/login'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

const formSchema = AuthFormSchema('sign-up')

const SignUpForm = () => {
    const [loading, setLoading ] = React.useState(false)
    const authform = useForm <z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email:"",
            name: "",
            password:"",
            country:""
        }
      }
    )
    const onSubmit  =  async(data:FieldValues) => {
      setLoading(prev => !prev)
      await registerUser(data)
      setLoading(prev => !prev)
      toast.success('registration successful')
    }
    return <div className=' '>
        {loading ? 
        <Loader2 className='animate-spin '/>
        :
    <Form {...authform}>
          <form  className='flex flex-col  gap-8 md:w-[65%] mx-auto ' onSubmit={authform.handleSubmit(onSubmit)}>
            <CustomAuthField 
            control={authform.control}
            label="Email"
            name="email"
            placeholder="Enter your email"
            />
            
            <CustomAuthField 
            control={authform.control}
            label='Name'
            name='name'
            placeholder='Enter your Name'
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
            <Button disabled={loading}  className='w-full uppercase font-bold text-lg p-4' type="submit">submit</Button>
          </div>
        </form>
    </Form>
        }
    </div>

}

export default SignUpForm
