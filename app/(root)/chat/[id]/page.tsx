import React from 'react'
import Chat from '../chat'

interface pageprops {
    params: {
        id: string
    }
}
export default function page(props : pageprops) {
  return (
    <div>
        <Chat
        roomId={props.params.id}
        />
    </div>
  )
}
