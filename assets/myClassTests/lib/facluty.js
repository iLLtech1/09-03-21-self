const Person = require('./Person.js')

class Faculty extends Person {
  constructor(name, email, phone) {
    super(name, email, phone)
  }
}

module.exports = Faculty