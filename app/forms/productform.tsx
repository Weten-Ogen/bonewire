"use client"
import React from 'react'
import { Form } from '../../components/ui/form'
import { ProductFormSchema } from '.'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {z} from 'zod'
import CustomProductFormField from '../../components/ui/customproductform'
import { Button } from '../../components/ui/button'
import { createProduct, getProduct } from '../actions/productservice'
import { useRouter } from 'next/navigation'

interface productprops {
  id:string,    
  label:string
  imageUrl:string,
  price:number,
  description:string,
  tag:string
}

interface productformprops {
  data?:productprops[] 

}

const formSchema = ProductFormSchema()
const ProductForm = (props:productformprops) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      label: "",
      imageUrl: "",
      description: "",
      price: 0,
      tag: ""
    }
  })  
  const handleproductsubmit = async(values:any) =>{
      const res = await createProduct({
        method: "POST",
        values:values,
        url: "/products/create"
      })
      if(res.message){
        router.push('/admin/form/newproduct')
      }
  }
  return (
    <Form {...form}>
      <form className='flex flex-col mt-5 md:mt-0 gap-5 md:w-[65%] md:mx-auto'
      onSubmit={form.handleSubmit(handleproductsubmit)}>
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
       <CustomProductFormField 
       control={form.control}
       name="tag"
       label="Tag"
       placeholder="Enter the product tag."
       type="textinput"
       />
       <div className='w-full mt-10'>
        <Button type="submit" className='w-full'>Submit</Button>
       </div>

      </form>
      
    </Form>
  )
}

export default ProductForm
