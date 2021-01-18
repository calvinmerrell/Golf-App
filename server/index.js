require('dotenv').config()
const express = require ('express')
const massive = require('massive')
const membersCtrl = require('./controllers/membersController')
const playerHistoryCtrl = require('./controllers/playerHistoryController')
const session = require('express-session')
const authctrl = require('./controllers/authController')
const authenticateUser = require('./middlewares/authenticateUser')

const {SERVER_PORT, DB_STRING, SESSION_SECRET} = process.env

const app = express();

// gives access to req.body middle ware
app.use(express.json());  

// this must be above end points
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 100 * 60 * 60 * 24 * 365
    }
}));

// auth endpoints
app.post('/auth/register', authctrl.register);
app.post('/auth/login', authctrl.login);
app.get('/auth/user', authctrl.getUserSession);
app.delete('/auth/logout', authctrl.logout);

// Members END POINTS: 
app.get('/api/members', membersCtrl.getAllMembers)

// PlayerHistory END POINTS:
app.get('/api/members/:user_id',playerHistoryCtrl.getRoundsByUserId); 

// POST Score END POINTS
app.post('/api/postscore',playerHistoryCtrl.addRound);

app.put('/api/playerhistory/:user_id/:round_id',playerHistoryCtrl.editRound);

app.delete('/api/playerhistory/:user_id/:round_id',playerHistoryCtrl.deleteRound);


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



app.listen(SERVER_PORT, ()=> console.log(`Listening on port ${SERVER_PORT}`))