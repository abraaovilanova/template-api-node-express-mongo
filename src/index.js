const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

require('./controllers/transaction')(app)

app.listen(process.env.PORT || 3001, ()=>{
    console.log('The server is running in port 3001')
})