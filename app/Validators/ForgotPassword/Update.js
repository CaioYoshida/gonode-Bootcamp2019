'use strict'

const Antl = use('Antl')

class ForgotPasswordUpdate {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      token: 'required|string',
      newPassword: 'required|confirmed'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = ForgotPasswordUpdate
