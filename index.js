const express = require('express')
const dotenve = require('dotenv')
const app = express()
dotenve.config()


app.use(express.json())
app.use(express.static('./public'))

const PORT = 3000 || process.env.PORT
app.listen(PORT, ()=> {

    console.log('Server is up at', PORT)
})