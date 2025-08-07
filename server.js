const express = require('express')
const app = express()
const http = require('http').createServer(app)

const PORT = process.env.PORT || 8000

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// Socket 
const io = require('socket.io')(http)

/*io.on('connection', (socket) => {
    console.log('A user connected')
   socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})*/

// New
  io.on("connection", (socket) => {
    console.log("A user connected",socket.id);
     socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

    // Optional: store user's name if sent from client
    socket.on("new-user", (username) => {
        socket.username = username;
        socket.broadcast.emit("user-joined", username);
    });

    // Handle disconnect
    socket.on("disconnect", () => {
        if (socket.username) {
            socket.broadcast.emit("user-left", `${socket.username} has left the chat.`);
        } else {
            socket.broadcast.emit("user-left", `A user has left the chat.`);
        }
        console.log("A user disconnected", socket.id);
    });
});