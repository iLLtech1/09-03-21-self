const Person = require('./Person.js')

class Teacher extends Person {
  constructor (name, email, phone) {
    super(name, email, phone)
  }
}

module.export = Teacher