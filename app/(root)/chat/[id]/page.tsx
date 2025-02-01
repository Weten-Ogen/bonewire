import React from 'react'
import Chat from '../chat'


export default function page({
  params
}: {
  params: {id: string}
}) {
  return (
    <div>
        <Chat
        roomId={props.params.id}
        />
    </div>
  )
}
