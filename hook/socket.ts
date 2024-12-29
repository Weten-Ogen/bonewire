"use client"
// hook for socket io
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "https://bonewire.shop"

const useSocket = () => {
    const [socket , setSocket] = useState<any>(null)

    useEffect(() => {
        const socketInstance = io(SOCKET_SERVER_URL)
        setSocket(socketInstance)
        return () => {
            socketInstance.disconnect()
        };
    }, [])
 return socket;
}

export default useSocket;