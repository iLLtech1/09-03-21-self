const render = require('./lib/htmlRenderer')
const Student = require('./lib/student')
const Teacher = require('./lib/teacher')
const Faculty = require('./lib/facluty')
const { prompt } = require('inquirer')
const { writeFile } = require('fs')

const school = []

const buildFaculty = ({ name, email, phone }) => {
  prompt({
    type: 'number',
    name: 'position',
    message: 'What is thier position?'
  })
    .then(({ position }) => {
      school.push(new Faculty(name, email, phone, position))
      menu()
    })
}

const buildTeacher = ({ name, email, phone }) => {
  prompt({
    type: 'input',
    name: 'subject',
    message: 'What subject do they teach?'
  })
    .then(({ subject }) => {
      school.push(new Teacher(name, email, phone, subject))
      menu()
    })
}

const buildStudent = ({ name, email, phone }) => {
  prompt({
    type: 'number',
    name: 'grade',
    message: 'What grade are they in?'
  })
    .then(({ grade }) => {
      school.push(new Student(name, email, phone, grade))
      menu()
    })
}

const buildPerson = () => {
  prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Who would you like to create?',
      choices: ['Student', 'Teacher', 'Faculty']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is their name?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is their email?'
    },
    {
      type: 'input',
      name: 'phone',
      message: 'What is their phone number?'
    }
  ])
    .then(({ role, ...person }) => {
      switch (role) {
        case 'Student':
          buildStudent(person)
          break
        case 'Teacher':
          buildTeacher(person)
          break
        case 'Faculty':
          buildFaculty(person)
          break
      }
    })
}

const menu = () => {
  prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: ['Create a new person', 'Finish']
  })
    .then(({ action }) => {
      switch (action) {
        case 'Create a new person':
          buildPerson()
          break
        case 'Finish':
          console.log(render(school))
          writeFile('./output/school.html', render(school), err => {
            if (err) { console.log(err) }
            console.log('School Built!!!')
          })
          // render(school)
          break
      }
    })
}

menu()