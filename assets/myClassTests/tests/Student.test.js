const Student = require('../lib/student.js')

test('Can set grade with constructor', () => {
  const student = new Student(' John Doe', 'johndoe@gmail.com', '(123) 456-7890', 12)
  expect(student.grade).toBe(12)
})

test('getRole should be "Student"', () => {
  const student = New Student()
  expect(student.getRole()).toBe('Student')
})

test('Can get grade with getGrade()', () => {
  const student = new Student(' John Doe', 'johndoe@gmail.com', '(123) 456-7890', 12)
  expect(student.getGrade()).toBe(12)
})