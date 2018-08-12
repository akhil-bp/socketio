var express = require('express'),  
app = express();//4 beyond .createServer
server = require('http').createServer(app),
io = require('socket.io').listen(server);//SOCKETIO LISTEN THE HTTP SERVER  

server.listen(3000);



app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');

});

//receive the event on server side
io.sockets.on('connection', function(socket){//client connect to socketio application
    //connection .....event
    
    socket.on('send message', function(data){//use same namein html.. ie<send message> to receive event data
        //send message pass to (data) 
        io.sockets.emit('new message', data);//sent data as new message
    });
});