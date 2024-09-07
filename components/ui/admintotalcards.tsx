"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { TypographyH2 } from '../typography/typoh2'
import { TypographyH4 } from '../typography/typoh4'
import staticlist from '@/constants/staticlist'
import { TypographyP } from '../typography/typoP'
import { Card, CardContent } from './card'
import AnimatedCounter from './animatedcoutert'
import { DognutChart } from './dognutchart'
import { Tai_Heritage_Pro } from 'next/font/google'
import { Progress } from './progress'

interface admintotalprops {
    end: number,
    prefix? :string,
    suffix ?: string,
    className?:string,
    label: string
}

const AdminTotalCard = (item:admintotalprops) => {
    const [data,setData]= React.useState<any[]>([]);

    const addItemtodata = () => {
        const objt={
            label: item.label,
            end : item.end
        }
        const newdata:any[] = []
        newdata.push(objt)
        setData(prev=> prev = newdata)
        console.log(newdata)
    }
    React.useEffect(() => {
        addItemtodata()
        
    },[])
    const config={
        Visitors: {
            label: item.label,
            end: item.end
        }
    }
  return (
    <article className={cn('',item.className)}>
    <Card className='w-full'>
        <CardContent className='flex items-center justify-around gap-4 p-4'>
            <div className='flex flex-col bg-black rounded-full p-2'>
                    {/* charts goes here  */}
                  <Progress 
                  value={item.end}
                  className="w-[80%]  p-8 m-2 bg-primary"
                  />
            </div>
            <div className='flex flex-col items-center '>
                <div className='text-3xl'>

                    <AnimatedCounter 
                    end={item.end}
                    prefix ={item.label === "Total Revenue" ? "$" : ""}
                    />
                </div>
                    <TypographyP
                    content={item.label}
                    className=''
                    />
            </div>
        </CardContent>
    </Card>
    </article>
  )
}

export default AdminTotalCard
