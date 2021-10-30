const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const { sendCustomSms, sendDiffusion } = require('./sms_controller')

router.post('/send/', (request, response) => {
    const {phone, content} = request.body
    sendCustomSms(phone, content)
    response.send(`send sms: ${phone}: ${content}`)
})

router.post('/diffusion/', (request, response) => {
    const {phoneList, content} = request.body
    sendDiffusion(phoneList, content)
    response.send(`send diffusion:${phoneList.length}.${phoneList}: ${content}`)
})

router.post('/webhooks/inbound', (request, response) => {
    response.status(200).end();
})

module.exports = router