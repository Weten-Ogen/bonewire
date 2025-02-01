import React from 'react'
import Chat from '../chat'

interface chatprops {
    params: {
        id: string
    }
}
export default function page(props : chatprops) {
  return (
    <div>
        <Chat
        roomId={props.params.id}
        />
    </div>
  )
}
