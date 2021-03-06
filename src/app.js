import http from 'http'
import { env, mongo, port, ip, apiRoot } from './config'
import mongoose from './services/mongoose'
import express from './services/express'
import api from './api'

const app = express(apiRoot, api)
const server = http.createServer(app)

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_KEY);
// const msg = {
//   to: 'mudalit@gmail.com',
//   from: 'it@madrachi.ug',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// // alert('sending...')
// console.log('sending message ', process.env.SENDGRID_KEY);

// sgMail.send(msg).then(() => {
//   console.log('Message sent')
// }).catch((error) => {
//   console.log(error.response.body)
//   // console.log(error.response.body.errors[0].message)
// })

if (mongo.uri) {
  mongoose.connect(mongo.uri)
}
mongoose.Promise = Promise

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env)
  })
})

export default app
