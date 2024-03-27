'use client'
import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'

const SocketComponent = () => {
  const ENDPOINT = 'https://eth-node-final.vercel.app/'

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT)
    socket.on('newmsg', (data) => {
      console.log(data, 'ddddddddddddd final from live')
    })
  }, [])

  return <div>hello from comp</div>
}

export default SocketComponent
