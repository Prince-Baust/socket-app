const express = require('express');
const app = express();
const expressServer = require('http').createServer(app);
const io = require('socket.io')(expressServer);

io.on('connection', socket => {
    console.log('New user connected.');  // Log when user connects to localhost:3000

    socket.on('message', msg => {
        console.log(msg);
    });

    // setInterval(() => {
    //     let d = new Date();
    //     let t = d.getTime();
        // socket.send(t);              // Sending data using built-in event
        // socket.emit('myEvent', t);  // Creating custom event
    // }, 1000);

    socket.on('disconnect', () => {
        console.log('User disconnected.');    // Log when a user disconnected from localhost:3000
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

expressServer.listen(3000, ()=> {
    console.log('Server started @ 3000');
});