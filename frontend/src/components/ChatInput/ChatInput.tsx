
import { useState } from 'react'
import './ChatInput.scss'


function ChatInput({send, placeholder, error}: {send: (msg: string)=> void, placeholder: string, error: Error | null}) {

  const [message, setMessage] = useState("")

const sendMessage = () => {
    if (message.trim() === '') return
    send(message)
    setMessage('')
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      sendMessage();
    }
  };

  return (
    <div className="input-container">
      <input value={message} onChange={e => setMessage(e.target.value)} onKeyDown={handleKeyDown} type="text" placeholder={placeholder} />
      {error && <div className="error-message">{error.message}</div>}
    </div>)
}

export default ChatInput
