
import './Message.scss'

function Message({ author, text, time, isUser }: {author: string, text: string, time: string, isUser: boolean}) {

  return (
     <div key={time}  className={`message ${isUser ? 'user' : 'other'}`}>
      {author && <div className="author">{author}</div>}
      <div className="text">{text}</div>
      {time && <div className="time">{new Date(Number(time)).toISOString()}</div>}
    </div>
  )
}

export default Message
