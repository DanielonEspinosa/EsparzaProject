/*const http = require('http');

const server = http.createServer((req, res)=> {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo');
});


server.listen(3000, () => {
    console.log('Server on port 3000');
});
*/
const express = require('express');
const morgan = require('morgan');
const app = express();
//Settings
//app.set('Appname', 'PruebaconExpress');
app.set('port', 3000);
app.set('view engine', 'ejs');

//Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.all('/user', (req, res, next) => {
    console.log('por aqui paso');
    next();
});
//Routes
/*app.get('/', (req, res) => {
    res.send('Hola Mundo');
});
*/
app.use( require('./routes/index'));

app.use(express.static('public'));

app.listen(app.get('port'), () =>{
    //console.log(app.get('Appname'));
    console.log(`Server on port ${app.get('port')}`);
});

