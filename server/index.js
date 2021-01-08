const express = require ('express')
const historyCtrl = require('./controllers/historyController')
const postCtrl = require('./controllers/postController')

const app = express()
const SERVER_PORT 5000

app.use(express.json())

//History endpoints
app.get('/api/history',historyCtrl.getHistory)
app.put('./app/history:round_id',historyCtrl.changeScore)
app.delete('/api/history:round_id',historyCtrl.removeFromHistory)

//Post endpoints
app.post('/api/post',postCtrl.addToHistory)


app.listen(SERVER_PORT, ()=> console.log(`Listening on port ${SERVER_PORT}`))