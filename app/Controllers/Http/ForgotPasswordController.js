'use strict'

const crypto = require('crypto')
const User = use('App/Models/User')

class ForgotPasswordController {
  async store ({ request, response }) {
    try {
      // when we need to seach just one field you can pass 'input' instead of 'all()' or 'only([])'
      const email = request.input('email')

      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Invalid e-mail' } })
    }
  }
}

module.exports = ForgotPasswordController
