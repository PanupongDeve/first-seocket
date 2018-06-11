
const chatMessage1 = (io, socket) => {
    socket.on('chat message', (msg) => {
        console.log(`Message:`, msg)
        io.emit('chat message', msg);
    })
}

const chatMessage2 = (io, socket) => {
    socket.on('chat message2', async (msg) => {
        const roomId = socket.handshake.query.roomId;
        const data = {
            token: socket.handshake.query.token,
            msg,
            roomId
        }
        console.log(`Message2:`, data)
        await io.emit(`chat message${roomId}`, msg);
    })
}


module.exports = {
    chatMessage1,
    chatMessage2
}