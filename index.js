require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const routes = require('./api/company/routes/company')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', routes)
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
})
app.listen(process.env.PORT || 1337, () => {
    console.log('Your app is running')
})
