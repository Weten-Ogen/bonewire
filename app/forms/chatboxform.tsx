"use client"
import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface formprops {
  className?:string
}

const formSchema = z.object({
  message: z.string().min(1,{
    message: "You need to input something."
  })
})
const Chatboxform = () => {
  const formm = useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues: {
      message: ""
    }
  })
  return (
    <form className='flex items-center w-full gap-2'>
      <Form  {...formm}>
        <FormField 
        name="message"
        control={formm.control}
        render={({field}) => (
          <FormItem>
            <FormLabel>
              <FormControl >
                <Input className="w-full" {...field} />
              </FormControl>
              <FormMessage/>
            </FormLabel>
          </FormItem>
        )}
        />
      </Form>
      <Button className='' type='submit'>
        send
      </Button>
    </form>
  )
}

export default Chatboxform
