'use strict'

class TaskStore {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      user_id: 'number',
      file_id: 'number',
      title: 'required|string',
      due_date: 'date'
    }
  }
}

module.exports = TaskStore
