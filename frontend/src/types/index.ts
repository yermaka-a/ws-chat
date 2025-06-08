export interface ChatHistory{
    chatHistory: string[]
}


export interface  WebSocketEvent {
    isTrusted: boolean,
    data: string
    timeStamp: number
}

export interface msgData {
    type: number
    body: string
    timeStamp: string
}