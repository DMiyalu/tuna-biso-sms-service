const express = require('express')
const sms_router = require('./sms/sms_router')
const app = express()
const {json, urlencoded} = express
const PORT = 3000 || process.env.PORT
const HOST = '0.0.0.0'

//Middleware
app.use(json())
app.use(urlencoded({extended: true}))
app.use('/sms', sms_router)
app.use('/', (request, response) => {
    response.send('Welcome on sms service')
})

app.listen(PORT, HOST, () => {    
 console.log(`Server running on port ${PORT}`)
})