'use strict'

class ProjectStore {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required|string'
    }
  }
}

module.exports = ProjectStore
