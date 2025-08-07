 💬 Real Chat App

A real-time chat application built using **Node.js**, **Express**, and **Socket.IO**. IT allows to set a display name, and send/receive messages instantly — all in real time.

🚀 Features

- Real-time bi-directional communication with **Socket.IO**
- Custom userid support
- Chat message broadcast to all connected users
- User join/leave notifications
- Lightweight frontend using HTML, CSS, and vanilla JavaScript
- No page refresh required

 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **WebSocket**: Socket.IO

 📁 Project Structure

real-chat-app/
│
├── public/ # Frontend files served to the client
│ ├── index.html
│ ├── style.css
│ └── client.js
│
├── server.js # Main server file
├── package.json
└── README.md


⚙️ Installation

1. Clone the repository

git clone https://github.com/your-username/real-chat-app.git
cd real-chat-app
Install dependencies

npm install
Start the server

node server.js
Or using nodemon (optional):

nodemon server.js
Open in browser
 
npm run dev
Open in browser

Go to: http://localhost:8000

🧠 How It Works
The client connects to the server using Socket.IO

When a user joins, the server broadcasts a welcome message

Messages sent by one user are instantly broadcast to all others

When a user disconnects, the server notifies the remaining users

📸 Screenshots
(You can add screenshots of your chat UI here)

🧩 Dependencies
express

socket.io

Install with:

npm install express socket.io
🙌 Acknowledgements
Node.js

Socket.IO

Express
