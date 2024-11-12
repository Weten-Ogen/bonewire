"use client"
import React from 'react'
import CustomAuthField from '@/components/ui/customauthfield'
import {  useForm } from 'react-hook-form'
import { AuthFormSchema } from '.'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'
import { Form } from '@/components/ui/form' 
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { registerUser } from '@/app/actions/register'
import { loginUser } from '@/app/actions/login'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { storeUserInfo } from '@/app/actions/authservice'

const formSchema = AuthFormSchema('sign-up')
  
const SignUpForm = () => {
    
    const router =  useRouter();
    const [loading, setLoading ] = React.useState(false)
    const [errror , SetError] = React.useState("")
    
    const authform = useForm <z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email:"",
            name: "",
            password:"",
            country:"",
            contactNumber: "",
            address : ""
        }
      }
    )
  
    const OnSubmit = async(values: any) =>{

        setLoading(prev => !prev)
        const res = await registerUser(values)
        
        setLoading(prev => !prev)

        if(res?.data?.id) {
          
          
          const result = await loginUser({
            password: values.password,
            email: values.email
          })
          authform.reset()
          if(result?.data?.accessToken) {
            storeUserInfo({accessToken : result?.data?.accessToken});
            router.push("/")
            router.refresh()
            toast('Signed up  Successfully')
          }
        }
      
    }

    return <div className=' '>
        {loading ?
        <div className='w-full'>
          <Loader2 
          className='animate-spin flex items-center justify-center ' 
          size={72}/>
        </div> 
        :
    <Form {...authform}>
          <form  className='flex flex-col  gap-8 md:w-[65%] mx-auto'
           onSubmit={authform.handleSubmit(OnSubmit)}>
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
            label='Address (region,city,street)'
            name='address'
            placeholder='Enter your address'
            />
            <CustomAuthField 
            control={authform.control}
            label='Contact'
            name='contactNumber'
            placeholder='Enter your Phone Number'
            />
            <CustomAuthField 
            control={authform.control}
            label='Country'
            name='country'
            placeholder='Enter your country'
            />

            <CustomAuthField 
            control={authform.control}
            label='Password'
            name='password'
            placeholder='Enter your password'
            />
              <Link href="/signin" 
              className='text-muted-foreground cursor-pointer'>
              Click here to Sign into your account
            </Link>
          <div className='mt-5 w-full'>
            <Button  className='w-full uppercase font-bold text-lg p-4' type="submit">sign up</Button>
          </div>
        </form>
    </Form>
        }
    </div>

}

export default SignUpForm
