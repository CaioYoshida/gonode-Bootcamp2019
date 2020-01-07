'use strict'

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
}

module.exports = ForgotPasswordUpdate
