import DisplayRooms from '@/app/(root)/chat/displayroom'
import React from 'react'

const page = async() => {
      const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/chat/getrooms`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    )
    const data= await res.json()


  return (
    <div>
      <DisplayRooms
      rooms={data.data}
      />
    </div>
  )
}

export default page
