"use client"
import { cn } from '@/lib/utils';
import React from 'react';
import {z} from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';

interface chatboxprops {
    className?:string
}

const formSchema = z.object({
    message: z.string()
})

const ChatBox = (props:chatboxprops) => {
   const zodSchema = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: ""
        }
        
   })
    return (
    <form className={cn('flex w-full gap-2 ' ,props.className)}>
     <Form {...zodSchema}>
        <FormField 
        name="message"
        control={zodSchema.control}
        render={({field}) => {
            return <FormItem className='w-full'>
                <FormControl>
                    <Input 
                    className='w-full' 
                    {...field}
                    />
                </FormControl>
                <FormMessage/>
            </FormItem>
        }}
        />
    </Form> 
    <Button className='px-6 capitalize text-sm font-sans py-2'>
        send
    </Button>
    </form>
  )
}

export default ChatBox
