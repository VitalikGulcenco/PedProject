const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
app.use(express.json())
app.use(cors());

const username = 'vitalik'

app.post('/api/post/autorize',(req,res)=>{
    if (req.body.username === username) {
            res.status(200).json({"response":true})
    }
    else{
        res.status(400).json({"response":false})
    }
})
app.use('/',(req,res)=>{
    res.json({massage:'Init'})
})


app.listen(5000, console.log('Node js server run at http://localhost:5000'))