var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var mysql = require('mysql');

app.use(express.static('public'));
//mysql coneccion
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'emenu',
    port: 3306
});

connection.connect(function(error) {
    if (error) {  
        throw error;
    } else {
        console.log('Conexion correcta.');
    }
});
io.on('connection', function(socket) {
  console.log('Alguien se ha conectado con Sockets');

  socket.on('usuario', function(data) {
    console.log(data);
  });
});

console.log("Hello World!");

server.listen(8080, function() {
    console.log("Servidor corriendo en http://localhost:8080");
});
