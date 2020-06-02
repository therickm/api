import sendgridMail from '@sendgrid/mail'
import { sendgridKey, defaultEmail } from '../../config'

sendgridMail.setApiKey(sendgridKey)

export const sendMail = ({
  fromEmail = defaultEmail,
  toEmail,
  subject,
  content
}) => {
  const msg = {
    to: toEmail,
    from: fromEmail,
    subject,
    html: content
  }
  return sendgridMail.send(msg).then(() => {
    console.log('Message sent')
  }).catch((error) => {
    console.log(error.response.body)
    // console.log(error.response.body.errors[0].message)
  })
}
