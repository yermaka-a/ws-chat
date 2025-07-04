package websocket

import "fmt"

const (
	NEW_USER        = "Новый пользователь присоединился..."
	DISCONNECT_USER = "Пользователь отсоединился..."
)

type Pool struct {
	Register   chan *Client
	Unregister chan *Client
	Clients    map[*Client]bool
	Broadcast  chan Message
}

func NewPool() *Pool {
	return &Pool{
		Register:   make(chan *Client),
		Unregister: make(chan *Client),
		Clients:    make(map[*Client]bool),
		Broadcast:  make(chan Message)}
}

func (pool *Pool) Start() {
	for {
		select {
		case client := <-pool.Register:
			pool.Clients[client] = true
			fmt.Println("size of connection pool:", len(pool.Clients))
			for client := range pool.Clients {
				fmt.Println(client)
				client.Conn.WriteJSON(Message{Type: 1, Body: NEW_USER})
			}
		case client := <-pool.Unregister:
			delete(pool.Clients, client)
			fmt.Println("size of connection pool:", len(pool.Clients))
			for client := range pool.Clients {
				client.Conn.WriteJSON(Message{Type: 1, Body: DISCONNECT_USER})
			}
		case message := <-pool.Broadcast:
			fmt.Println("Sending message to all clients in the pool")
			for client := range pool.Clients {
				if err := client.Conn.WriteJSON(message); err != nil {
					fmt.Println(err)
					return
				}
			}
		}
	}
}
