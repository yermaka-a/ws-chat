import type { msgData, WebSocketEvent } from "@/types";
import { SocketUrl } from "../constants/urls";

const socket = new WebSocket(SocketUrl)




const connect = (cb: (msg:msgData)=> void) => {
    socket.onopen = ()=>{
        console.log("successfully connected")
    }
  
    socket.onmessage = (msg) =>{
        console.log("Message from websokcet", msg)
        const newMsg = msg  as unknown as WebSocketEvent
        const data: {type: number, body: string} = JSON.parse(newMsg.data)
        const newData: msgData = {timeStamp: Date.now().toString(), ...data}
        cb(newData)
    }

    socket.onclose = (event)=>{
        console.log("socket closed connection:", event)
        // cb()
    }

    socket.onerror = (error)=>{
        console.log("socker error:", error)
    }
}

const sendMsg = (msg: string)=>{
    console.log("sending msg:", msg)
    socket.send(msg)
   
}

export {connect, sendMsg}