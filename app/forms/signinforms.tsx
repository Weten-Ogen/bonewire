"use client"
import React from 'react'
import { Form } from '@/components/ui/form'
import { AuthFormSchema, AuthLoginSchema } from '.'
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
import CustomAuthLoginField from '@/components/ui/customauthloginField'


const formSchema = AuthLoginSchema()

const SignInForm = () => {  
  const router = useRouter();
  const [loading , setLoading] = React.useState(false);
  const [error , setError] = React.useState("")
  
  
  const authform = useForm <z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const handleLogin = async(values:any) => {
      setLoading(prev => !prev)
      const res = await loginUser({
        email: values.email,
        password: values.password
      });
      
      authform.reset()
      setLoading(prev => !prev)
      if(res?.data?.accessToken) {
        
        storeUserInfo({accessToken:res?.data?.accessToken});
        router.push("/")
        router.refresh()
      }
      
  }
 
  
  
  return( 
  <>
    {loading 
    ?  
    <div className="w-full">
      <Loader2 
      size={72}
      className='animate-spin  text-4xl flex items-center justify-center mt-20'/>
    </div>
    :
    <Form {...authform}>
      <form className='flex flex-col mt-10 gap-5 md:w-[65%] mx-auto'
      onSubmit={authform.handleSubmit(handleLogin)}
      >
        <CustomAuthLoginField 
         control={authform.control}
         name="email"
         label="Email"
         placeholder='Enter your Email'
        />
        <CustomAuthLoginField
        control={authform.control}
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
        <div className='mt-5 w-full '>
            <Button  
            type='submit'
            className='w-full cursor-pointer p-4' 
            >
              log in 
            </Button>
      </div>                                                     </form>
    </Form>}
  </>
  )
}

export default SignInForm
