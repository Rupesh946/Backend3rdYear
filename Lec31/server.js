const { WebSocketServer }=  require('ws');

const wss = new WebSocketServer({ port: 8015 });
//event-handler
wss.on("connection",function(socket){
console.log(socket);
socket.send('Hello server');
setInterval(()=>{
    socket.send('Jio stock price is "+"'+Math.random()*100 )
},500)
 socket.on('message',function message(data){
    console.log(data.toString());
 });
});
//app.get("/",(re1,res)=>)