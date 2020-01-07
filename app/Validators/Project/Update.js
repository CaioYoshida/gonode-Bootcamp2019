'use strict'

class ProjectUpdate {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required|string'
    }
  }
}

module.exports = ProjectUpdate
