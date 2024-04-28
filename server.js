require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectei a base de dados...')
        app.emit('pronto');
    })
    .catch(e => console.log(e))
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf =  require('csurf');

const { middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware');

app.use(helmet()); 

app.use(express.urlencoded({ extended: true })); // posso postar formulários
app.use(express.json()); // posso postar json
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: process.env.SESSIONSECRET,
    tore: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, //em milésimos de segundos
        httpOnly: true
    }
})
app.use(sessionOptions);
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views')); // arquivos que renderizamos na tela 
app.set('view engine', 'ejs'); // engine que estamos utilizando para fazer a renderização

app.use(csrf());

// meus middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError); 
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Server is running at port 3000');
        console.log('Access http://localhost:3000/');
    });
});
