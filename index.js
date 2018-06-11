
const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const ChatMessage = require('./SocketController/chatMessage');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// middleware
io.use((socket, next) => {
    let token = socket.handshake.query.token;
    if (token === 'abc') {
      return next();
    }
    return next(new Error('authentication error'));
  });


io.on('connection', (socket) => {
    console.log(' a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected')
    });

    ChatMessage.chatMessage1(io, socket);
    ChatMessage.chatMessage2(io, socket);

});

const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});