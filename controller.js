const Vonage = require('@vonage/server-sdk')
const vonage = new Vonage({
  apiKey: "19d94037",
  apiSecret: "MxgoD1RhPcPn1tpv"
})

const from = "Tuna Biso"
const welcome = "Bienvenu sur Tuna Biso, une plateforme de lutte contre les fake news."
const sendCustomSms = (to, text) => {
    vonage.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if(responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.")
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`)
            }
        }
    })
}

const sendDiffusion = (contactList, text) => {
    contactList.map((contact) =>  sendCustomSms(contact, text))
}

exports.sendCustomSms = sendCustomSms
exports.sendDiffusion = sendDiffusion
exports.welcome = welcome