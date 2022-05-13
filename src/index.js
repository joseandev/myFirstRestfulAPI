const express = require('express');
const app = express();
const morgan = require('morgan');
//Morgan es un middleware, o sea que procesa datos antes de que el servidor los reciba

//settings
app.set('port', process.env.PORT || 5500);
app.set('json spaces', 2)

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); // Vamos a tratar de entender datos que vienen desde un formulario, input nada de imagenes
app.use(express.json()); // Manejar formato json

//routes 
app.use('/api/users', require('./routes/users.js'))
app.use('/api/movies', require('./routes/movies.js'))

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port: ${app.get('port')}`);
});