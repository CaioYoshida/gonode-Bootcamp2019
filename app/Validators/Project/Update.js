'use strict'

const Antl = use('Antl')

class ProjectUpdate {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required|string'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = ProjectUpdate
