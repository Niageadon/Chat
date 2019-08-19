// import socket from "@/plugins/socket";

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const m = (name, text, id) => ({name, text, id});

io.on('connection', socket =>{
   console.log('Соединение установлено');
    socket.on('methodd', data =>{
        console.log(data)
    });

    socket.on('userJoined', (data, cb) =>{
        if(!(data.name || data.room)){
            return cb('Data is\'t correct')
        }
        socket.join(data.room);
        cb({ userId: socket.id});
        socket.emit('newMessage', m('admin', `hello, ${data.name}`))
        socket.broadcast.to(data.room)
            .emit('newMessage', m('admin', `User: ${data.name} is login`))
    });

    // socket.emit('newMessage', {text: 'newMessage'})
})


module.exports = {
  app,
  server
};

