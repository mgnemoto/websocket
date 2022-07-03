const express = require('express');
const {Server: HttpServer} = require('http');
const {Server:IOServer} =require('socket.io');

const app= express();
const httpServer= new HttpServer(app);
const io= new IOServer (httpServer);

app.use(express.static('public'));

io.on('connection',socket => {
    console.log('Un cliente se ha conectado');
    socket.emit('messages', messages);

    socket.on('new-message',data => {
        messages.push(data);
        io.sockets.emit('messages', messages);});
});

httpServer.listen(8080, ()=>
console.log('Server running at port 8080'));

const messages = [
    { author: "Juan", text: "¡Hola! ¿Que tal?" },
    { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
    { author: "Ana", text: "¡Genial!" },
];