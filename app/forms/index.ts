import {z} from 'zod'

export const AuthLoginSchema = () => z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

export const AuthFormSchema = (type:string) => z.object({
  name:z.string().optional(),
  country:z.string().optional(),
  address : z.string().optional(),
  email: z.string().email(),
  contactNumber: z.string().min(10),
  password: z.string().min(8)
})



export const ProductFormSchema = () => z.object({
  label : z.string().min(3),
  imageUrl: z.string(),
  price : z.coerce.number(),
  description: z.string(),
  tag: z.string()
})