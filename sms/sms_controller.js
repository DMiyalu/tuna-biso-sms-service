const Vonage = require('@vonage/server-sdk')
const vonage = new Vonage({
  apiKey: "19d94037",
  apiSecret: "MxgoD1RhPcPn1tpv"
})

const from = "Tuna Biso"
// const welcome = "Bienvenu sur Tuna Biso, une plateforme de lutte contre les fake news."
/**
 * @param {string} to - The string
 * @param {string} content - The string
 * @param {object} contactList - The array
 */
const sendCustomSms = (to, content) => {
    try {
        vonage.message.sendSms(from, to, content, (err, responseData) => {
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
    } catch (error) {
        console.log(error)
    }
}

const sendDiffusion = (contactList, content) => {
    try {
        contactList.forEach(element => {
            
        });((contact) =>  sendCustomSms(contact, content))
    } catch(error) {
        console.log(error)
    }
}

exports.sendCustomSms = sendCustomSms
exports.sendDiffusion = sendDiffusion