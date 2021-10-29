const express = require('express')
const data = require('./data')
const { sendDiffusion, welcome } = require('./controller')
const app = express()
const {
 json, 
 urlencoded
} = express
const PORT = 3000 || process.env.PORT
app.use(json())

app.use(urlencoded({
 extended: true
}))

app.get('/', (request, response) => {
    response.send('Welcome on sms service')
})

app.get('/sms/diffusion/', (request, response) => {
    sendDiffusion(data.contactListFake, welcome)
    response.send('sended')
})

app.get('/sms/send/', (request, response) => {
    sendCustomSms(data.phone, welcome)
    response.send('sended')
})

app.post('/webhooks/inbound', (request, response) => {
    console.log(request.body);
    response.status(200).end();
  });

app.listen(3000, () => {     
 console.log('Server listening at http://localhost:3000')
})