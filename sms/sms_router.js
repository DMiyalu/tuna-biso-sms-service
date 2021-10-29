const { request, response } = require('express')
const express = require('express')
const router = express.Router()

router.get('send/', (request, response) => {
    response.send('send sms');
})

router.get('diffusion/', (request, response) => {
    response.send('sms diffusion');
})

router.post('webhooks/inbound', (request, response) => {
    // response.status(200).end();
    response.send('webhooks');
})

module.exports = router