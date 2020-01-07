'use strict'

const Antl = use('Antl')

class TaskUpdate {
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

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = TaskUpdate
