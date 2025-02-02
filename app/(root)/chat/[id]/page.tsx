import React, { use } from 'react'
import Chat from '../chat'


export default  function page({params}: {
  params: Promise<{id: string}>}) {
  const {id} = use(params)

  return (
    <div>
        <Chat
        roomId={id}
        />
    </div>
  )
}
