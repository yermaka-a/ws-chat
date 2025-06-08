# WebSocket Chat Mini Project 💬

## Table of Contents 📚

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

## Overview

This is a simple real-time chat application using **Go** for the backend and **React** with **TypeScript** for the frontend. It uses WebSocket for real-time communication.

## Features ✨

- Real-time messaging
- Responsive design

## Technologies Used 🛠️

- **Backend**: 
  - Go (Golang)
  - Gorilla WebSocket for handling connections

- **Frontend**: 
  - React
  - TypeScript
  - Bun as the JavaScript runtime

## Getting Started 🚀

### Prerequisites 📋

- Go installed
- Node.js and npm (or Bun) for the frontend

### Installation 🧰

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yermaka-a/ws-chat.git
   cd ws-chat
   ```

2. **Backend Setup**:

   Navigate to the backend directory:

   ```bash
   cd backend
   go mod tidy
   go run main.go
   ```

3. **Frontend Setup**:

   Navigate to the frontend directory:

   ```bash
   cd frontend
   bun install
   bun run dev
   ```

4. **Access the Application**:

   Open your browser and go to `http://localhost:3000`.

## Usage 📝

- Enter your username and join the chat.
- Send messages to other users.

## Contributing 🤝

Feel free to fork the repository and submit pull requests.

## License 📄

This project is licensed under the MIT License. 

---

This README provides a basic overview of the chat application and how to get started. Enjoy!