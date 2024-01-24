const express = require('express')
const { home, getData } = require('../controller/home.controller')


const route = express.Router()

route.get('/', home)

route.get('/get-data', getData)

module.exports = { route }