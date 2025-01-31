'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface displayprops {
    className?:string,
    rooms: any[]
}

const DisplayRooms = (props : displayprops) => {
    
  
    
    
  return (
    <div>

    <div>
        {
            !props.rooms ?  
            <div>there are no new messages</div>:
            <div className='flex flex-col items-center gap-4 p-4'>
                {props.rooms.map((item:any) =>{
                    return <Link
                                className='container shadow-lg p-4' 
                                href={`/chat/${item.id}`}
                                key={item.id}
                                >
                            <div className='flex  flex-col  '>
                                <h3>{item.id}</h3>
                                <p>{item.createdAt}</p>
                            </div>
                    </Link>
                })}
            </div>
        }
    </div>
    </div>)
    }
export default DisplayRooms