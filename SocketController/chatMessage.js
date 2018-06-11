
const chatMessage1 = (io, socket) => {
    socket.on('chat message', (msg) => {
        console.log(`Message:`, msg)
        io.emit('chat message', msg);
    })
}

const chatMessage2 = (io, socket) => {
    socket.on('chat message2', async (msg) => {
        const data = {
            token: socket.handshake.query.token,
            msg
        }
        console.log(`Message2:`, data)
        await io.emit('chat message2', msg);
    })
}


module.exports = {
    chatMessage1,
    chatMessage2
}