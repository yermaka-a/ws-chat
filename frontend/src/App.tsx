
import { useEffect, useState } from 'react'
import '@/App.scss'
import { connect, sendMsg } from '@/api'
import Header from "@/components/Header"
import ChatHistory from '@/components/ChatHistory'
import ChatInput from '@/components/ChatInput'
import Container from '@/components/Container'
import { InputSuggestion } from '@/constants/msgs'
import Footer from '@/components/Footer'
import type { msgData } from './types'

function App() {
  const [chatHistory, setChatHistory] = useState<msgData[]>([])
  useEffect(()=>{
    connect((msg)=>{
        console.log("New message")
      setChatHistory(prevHistory => {
          return [...prevHistory, msg]
      })
    })
  }, [])

  return (
    <>
    <Header/>
    <Container>
      <ChatHistory chatHistory={chatHistory} />
    </Container>
      <ChatInput send={sendMsg} placeholder={InputSuggestion} error={null} />
    <Footer/>
    </>
  )
}

export default App
