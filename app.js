var express = require('express'); //se importa la dependencia

var app = express(); //desclaramos una App de Express
var port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor

app.use('/assets', express.static(__dirname + '/public')); //mapear carpeta virtual

app.use('/', function (req, res, next) { //debug al acceder a una ruta particular
    console.log('Request Url:' + req.url);
    next();
})

//primera ruta (esta al nivel de la raiz /), Hello World! ROUTE HANDLER
app.get('/', function (req, res) {
    //insertar etiqueta <link>
    res.send(`<html>
    <head>
    <link href=assets/style.css type=text/css rel=stylesheet />
    </head>
    <head></head><body><h1>Hello world!</h1></body></html>`);
});

//segunda ruta /api => regresa un objeto JSON / buscar localhost:3000/api
app.get('/api', function(req, res) {
    res.json({firstname: 'John', lastname: 'Doe'});
});

//tercera ruta /person => recibe un parametro
app.get('/person/:id', function(req, res) {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.listen(port); //levantar el server y ponerlo a la escucha