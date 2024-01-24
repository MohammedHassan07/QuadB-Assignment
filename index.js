const express = require('express')
const dotenve = require('dotenv')
const { route } = require('./routes/home.route')
const cors = require('cors')
const hbs = require('hbs')
const app = express()
dotenve.config()


app.use(express.json())
app.use(express.static('./public'))
app.set('view engine', 'html')
app.engine('html', hbs.__express)

const PORT = 3000 || process.env.PORT
app.listen(PORT, () => {

    console.log('Server is up at', PORT)
})

const option = {
    origin: 'http://127.0.0.1:5500'
}
// app.use(cors(option))
app.use(route)