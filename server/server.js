const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.status(200).send('welcome yuvra')
})

app.get('/register', (req, res)=>{
    res.status(200).send('This is Registration page')
})

const PORT = 5000
app.listen(PORT,()=>console.log(`Port running on : ${PORT}`))
