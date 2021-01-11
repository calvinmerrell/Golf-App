require('dotenv').config();
const express = require ('express');
const massive = require('massive')
const session = require('express-session');
const AC = require('./controllers/authController');

// const historyCtrl = require('./controllers/historyController');
// const postCtrl = require('./controllers/postController');

const app = express()
const {SERVER_PORT, DB_STRING, SESSION_SECRET} = process.env

app.use(express.json());   // gives access to req.body

// connect our server to our db
massive({
    connectionString: DB_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbInstance => {
    console.log('DB connected');
    app.set('db', dbInstance)
})

// turn on express-session and create session/ identifier cookie
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 100 * 60 * 60 * 24 * 7 * 52
    }
}));


//auth endpoints
app.post('/auth/register', AC.register);
app.post('/auth/login', AC.login);
app.get('/auth/user', AC.getUserSession)
app.delete('/auth/logout', AC.logout);


// //History endpoints
// app.get('/api/history',historyCtrl.getHistory)
// app.put('./app/history:round_id',historyCtrl.changeScore)
// app.delete('/api/history:round_id',historyCtrl.removeFromHistory)

// //Post endpoints
// app.post('/api/post',postCtrl.addToHistory)


app.listen(SERVER_PORT, ()=> console.log(`Listening on port ${SERVER_PORT}`))