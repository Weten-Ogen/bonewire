"use client"
import React from 'react'
import { Form } from '@/components/ui/form'
import { AuthFormSchema } from '.'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import CustomAuthField from '@/components/ui/customauthfield'
import { Button } from '@/components/ui/button'
import {z} from 'zod'
import Link from 'next/link'
import { loginUser } from '@/app/actions/login'
import { storeUserInfo } from '@/app/actions/authservice'
import {  useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'


const formSchema = AuthFormSchema('sign-in')

const SignInForm = () => {  
  const router = useRouter();
  const [loading , setLoading] = React.useState(false);
  const [error , setError] = React.useState("")
  
  
  const form = useForm <z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const OnSubmit = async(values:any) =>{
  
      setLoading(prev=> !prev)
      const res = await loginUser(values)
      setLoading(prev => !prev)

      if (res?.data?.accessToken) {
        toast.success(res.message);
        storeUserInfo({accessToken:res?.data?.accessToken});
        router.push("/");
        router.refresh()       
      }
      else{
        setError(res.message);
      }
  }
  
  
  return (
    <div>
    {loading ?  
    <Loader2 
    size={72}
    className='animate-spin text-4xl flex items-center justify-center mt-20'/>
    :
    <Form {...form}>
      <form 
      className='flex flex-col mt-10 gap-5 md:w-[65%] mx-auto'
      onSubmit={form.handleSubmit(OnSubmit)}
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
        click here to sign up for an account.
        </Link>
      </div>
        <div className='w-full'>
        <Button 
        type="submit"
        className='w-full mt-5 text-lg p-4'>
          Log in
        </Button>
        </div>
      </form>
    </Form>}
      </div>
  )
}

export default SignInForm
