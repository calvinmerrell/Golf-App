require('dotenv').config();
const express = require ('express');
const massive = require('massive')
const session = require('express-session');
const authctrl = require('./controllers/authController');
const authenticateUser = require('./middlewares/authenticateUser')
const {SERVER_PORT, DB_STRING, SESSION_SECRET} = process.env

// const historyCtrl = require('./controllers/historyController');
// const postCtrl = require('./controllers/postController');

const app = express();

app.use(express.json());   // gives access to req.body middle ware

// turn on express-session and create session/ identifier cookie must be above end points
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 100 * 60 * 60 * 24 * 365
    }
}));


//auth endpoints
app.post('/auth/register', authctrl.register);
app.post('/auth/login', authctrl.login);
app.get('/auth/user', authctrl.getUserSession)
app.delete('/auth/logout', authctrl.logout);




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

// //History endpoints
app.get('/api/members'),(req,res) => res.status(200).send(members)

app.get('/api/members/:user_id',historyCtrl.getHistory)
// app.put('./app/history:round_id',historyCtrl.changeScore)
// app.delete('/api/history:round_id',historyCtrl.removeFromHistory)

// //Post endpoints
// app.post('/api/post',postCtrl.addToHistory)


app.listen(SERVER_PORT, ()=> console.log(`Listening on port ${SERVER_PORT}`))