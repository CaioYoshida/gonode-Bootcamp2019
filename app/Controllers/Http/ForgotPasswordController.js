'use strict'

const crypto = require('crypto')
const User = use('App/Models/User')
const Mail = use('Mail')

class ForgotPasswordController {
  async store ({ request, response }) {
    try {
      // when we need to seach just one field you can pass 'input' instead of 'all()' or 'only([])'
      const email = request.input('email')

      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      console.log('entrou')

      await Mail.send(
        ['emails.forgot_password'],
        {
          email,
          token: user.token,
          link: `${request.input('redirect_url')}?token=${user.token}`
        },
        message => {
          message.to(user.email)
          message.from('caio@gonode.com', 'Caio | Gonode')
          message.subject('Recuperação de senha')
        }
      )

      console.log('saiu')
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Invalid e-mail' } })
    }
  }
}

module.exports = ForgotPasswordController
