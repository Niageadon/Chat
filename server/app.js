// import socket from "@/plugins/socket";

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const users = require('./users')();

const message = (name, text, id) => ({name, text, id});

io.on('connection', socket =>{
    console.log('Соединение установлено');
    socket.on('userJoined', (data, cb) =>{
      console.log(data);
        if(!(data.name || data.room)){
            return cb('Data is\'t correct')
        }
        cb({userId: socket.id});
        socket.join(data.room);
        users.remove(socket.id);
        users.add({
          id: socket.id,
          name: data.name,
          room: data.room
        });
        cb({ userId: socket.id});
        socket.emit('newMessage', message('info', `hello, ${data.name}`));
        socket.broadcast.to(data.room)
            .emit('newMessage', message('info', `User: ${data.name} is login`))
    });

    socket.on('createMessage', (data, cb) => {
      if (!data.text){
        return cb('message is empty')
      }
      const user = users.get(data.id);
      if(user){
        io.to(user.room).emit('newMessage', message(user.name, data.text, data.id))
      }
      cb();
    })
    // socket.emit('newMessage', {text: 'newMessage'})
})


module.exports = {
  app,
  server
};

