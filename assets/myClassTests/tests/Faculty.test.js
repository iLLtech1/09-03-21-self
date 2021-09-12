const Faculty = require('../lib/Faculty.js')

test('Can set grade with constructor', () => {
  const faculty = new Faculty(' John Doe', 'johndoe@gmail.com', '(123) 456-7890', 'admin')
  expect(faculty.position).toBe('admin')
})

test('getRole should be "Student"', () => {
  const faculty = New Faculty()
  expect(faculty.getRole()).toBe('Faculty')
})

test('Can get position with getPosition()', () => {
  const faculty = new Faculty(' John Doe', 'johndoe@gmail.com', '(123) 456-7890', 'admin')
  expect(faculty.getPosition()).toBe('admin')
})