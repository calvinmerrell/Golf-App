require('dotenv').config()
const express = require ('express')
const massive = require('massive')
const membersCtrl = require('./controllers/membersController')
const playerHistoryCtrl = require('./controllers/playerHistoryController')
const postCtrl = require('./controllers/postController')
const session = require('express-session')
const authctrl = require('./controllers/authController')
const authenticateUser = require('./middlewares/authenticateUser')
const {SERVER_PORT, DB_STRING, SESSION_SECRET} = process.env



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


// auth endpoints
app.post('/auth/register', authctrl.register);
app.post('/auth/login', authctrl.login);
app.get('/auth/user', authctrl.getUserSession);
app.delete('/auth/logout', authctrl.logout);

// Members END POINTS: 
app.get('/api/members', membersCtrl.getAllMembers)

// app.get('/api/members'),(req,res) => res.status(200).send(members)

// app.get('/api/members/:id', (req,res)=>{
//     const user = users.find((e) => e.id === +req.params.id)

//     if(user) {
//         res.status(200).send(album)
//     } else {
//         res.status(404).send('User not found')
//     }
// })

// PlayerHistory END POINTS:
// app.get('/api/playerhistory', playerHistoryCtrl.getAllRounds);
// app.get('/api/playerhistory/:round_id',playerHistoryCtrl.getRoundById);
// app.post('/api/playerhistory',postCtrl.addRound);
// app.put('/api/playerhistory/:round_id',playerHistoryCtrl.editRound);
// app.delete('/api/playerhistory/:round_id',playerHistoryCtrl.deleteRound);



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