"use client"
import React from 'react'
import { Form } from '../ui/form'
import { ProductFormSchema } from '.'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {z} from 'zod'
import CustomProductFormField from '../ui/customproductform'
import { Button } from '../ui/button'

interface productprops {
  id:string,    
  label:string
  imageUrl:string,
  price:number,
  description:string
}

interface productformprops {
  data?:productprops[] 
}

const formSchema = ProductFormSchema()
const ProductForm = (props:productformprops) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      label: "",
      imageUrl: "",
      description: "",
      price: 0
    }
  })  
  return (
    <Form {...form}>
      <form className='flex flex-col gap-5 md:w-[65%] md:mx-auto'>
      <CustomProductFormField 
       control={form.control}
       name="label"
       label="Product Name"
       placeholder="Enter the product name."
       type="textinput"
       />
       <CustomProductFormField 
       control={form.control}
       name="imageUrl"
       label="Image URL"
       placeholder="Enter the image path."
       type="textinput"
       />
       <CustomProductFormField 
       control={form.control}
       name="price"
       label="Price"
       placeholder="Enter the Price."
       type="textinput"
       />      
       <CustomProductFormField 
       control={form.control}
       name="description"
       label="Description"
       placeholder="Enter the product name."
       type="textarea"
       />
       <div className='w-full mt-10'>
        <Button className='w-full'>Submit</Button>
       </div>

      </form>
      
    </Form>
  )
}

export default ProductForm
