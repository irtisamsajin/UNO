//socket.data={jwt token, move}
const express=require('express');
const cors=require('cors');
const http=require('http');
const dotenv=require('dotenv');
const {Server}=require('socket.io');

const app=express();
app.use(cors());
dotenv.config();
const server=http.createServer(app);
const io=new Server(server);

io.on('connection',(socket) => {
    /* socket.on('count',(count) => {
        count++;
        io.emit('count+',count);
    }) */
})

server.listen(process.env.SOCKET_PORT);