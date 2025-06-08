
import Message from '@/components/Message'
import './ChatHistory.scss'
import type { msgData } from '@/types'

function ChatHistory({chatHistory}: {chatHistory: msgData[]}) {
  console.log(chatHistory)
  return (
    <>
    {chatHistory.map((el)=> <Message author="Me" isUser={false} text={el.body}  time={el.timeStamp} key={el.timeStamp} />)}
    </>
  )
}

export default ChatHistory
