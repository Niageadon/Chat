// import socket from "@/plugins/socket";

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


io.on('connection', socket =>{
  console.log('ioCon');

  socket.on('methodd', data =>{
    console.log(data)
  });
  socket.emit('newMessage', {text: 'newMessage'})
})


module.exports = {
  app,
  server
};

