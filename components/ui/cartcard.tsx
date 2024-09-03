"use client"
import { cn } from '@/lib/utils'
import { product } from '@/types/next'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from './card'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './button'

    const CartCard = ({content,id,imageurl,label,tags,className}:product) => {
    const [amount , setAmount] = React.useState(0);
    const handleIncrease = () => {
        setAmount(prev => prev + 1)
    }
        const handleDecrease = () => {
            setAmount (prev => prev != 0 ?  prev - 1 : 0)
    }

    return (
    <div className={cn('',className)}>

        <Card className='p-0'>
            <CardContent className=''>
                <div className='w-full  overflow-hidden object-contain rounded-md'> 
                    <Image 
                    src={imageurl}
                    alt={label}
                    width={100}
                    height={100}
                    className='w-full aspect-square object-cover p-4 rounded-md h-auto'
                    />

                </div>
                <CardTitle className=''>{label}</CardTitle>
                <div className=' text-black'>
                <p>Amount</p>
                <p>
                <span>$</span>
                <span>20</span>
                </p>
                </div>
                
            <Link href={`/cart/${id}`}  className='cursor-pointer'>
            </Link>
                <div className=''>
                    <div className='flex w-full justify-center items-center'>
                        <Button disabled={amount === 0} onClick={handleDecrease}  className='w-full'>
                          -
                        </Button >
                        <p className='w-full text-center'> {amount} </p>
                        <Button onClick={handleIncrease} className='w-full'>
                            +
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>     
    </div>
   ) }

export default CartCard
