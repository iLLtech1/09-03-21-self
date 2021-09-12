//start
//Intro to constructors
// below is a traditional object creation. But what if we needed 2000 different dogs? the this just won't do. THat would be 10k lines of code. 

// let dog1 = {
//   name: 'Beef',
//   age: 2,
//   breed: 'Chihuahua'
// }

// let dog2 = {
//   name: 'Bear',
//   age: 5,
//   breed: 'Cockapoo'
// } 
//end

//Start
//So this is where Contructors come in and `thes` will replace our => to call out a function. Lets begin.

// function Dog (name, age, breed) {
//   this.name = name,
//   this.age = age,
//   this.breed = breed
// }

//from here we want to create a dog Named Beef. So we will need to create a new instance of the dog constructor.

// let dog1 = new Dog('Beef', 2, 'chihuahua')

// if you console log dog1. you will see its name, age, breed populate the terminal.

// console.log(dog1)
//end

//start
//let's make the dog bark and say,"Woof! My name is Beef or Bear!" To do this we will write in a function directly to the Dog constructor//

// function Dog(name, age, breed) {
//   this.name = name,
//     this.age = age,
//     this.breed = breed
//     this.bark = function () {
//       console.log(`Woof! My name is ${this.name}`)
//     }
// }


// let dog1 = new Dog('Beef', 2, 'chihuahua')
// let dog2 = new Dog('Bear', 5, 'cockapoo')

// dog1.bark()
// dog2.bark()

//end

//start
//Now if the object needs and attributing property then let see what that looks like next.

// function Dog(name, age, breed) {
//   this.name = name,
//     this.age = age,
//     this.breed = breed
//   this.bark = function () {
//     console.log(`Woof! My name is ${this.name}`)
//   }
// }


// let dog1 = new Dog('Beef', 2, 'chihuahua')
// //just call the var out and give it the dot attribute and its value//
// dog1.aggression = '15%'
// //
// let dog2 = new Dog('Bear', 5, 'cockapoo')

// dog1.bark()
// dog2.bark()
// console.log(dog1, dog2)

//end


//start
//Using the `Call Method` to call on anothers functions properties

// function Dog (name, age, breed) {
//   this.name = name
//   this.age = age
//   this.breed = breed
//   this.bark = function () {
//     console.log(`Woof! My name is ${this.name}`)
//   }
// }

// function Chihuahua (name, age, breed, aggression) {
//   Dog.call(this, name, age, breed)
//   this.aggression =aggression
// }

// const dog1 = new Chihuahua('Beef', 2, 'chihuahua', '15%')

// const dog2 = new Dog('Bear', 5, 'cookapoo')

// dog1.bark()
// dog2.bark()
// console.log(dog1, dog2)

//end


//start
// lets create a dog using FACTORY FUNCTIONS. Factory Functions do not get a capitol Letter, because those are reserved for Constructors. Factory Function is an object that hands you a function. Also instead of using the `this` to call a functions we can get our => back to call our functions.// Bonus make Beef bark!

// const dog = (name, age , breed) => {
//   return {
//     name: name,
//     age: age,
//     breed: breed,
//     bark () {
//       console.log(`Woof! My name is ${this.name}`)
//     }
//   }
// }

// const dog1 = dog('Beef', 2, 'Chihuahua')

// console.log(dog1)
// dog1.bark()

//end


//start
//Lets clean it up even further. When you have a Key and a Value, where the value is grabbed from a parameter or varible of an object, with the same exact name. You do not need the Colon syntax, just the varibles name.//

// const dog = (name, age, breed) => {
//   return {
//     name,
//     age,
//     breed,
//     bark() {
//       console.log(`Woof! My name is ${this.name}`)
//     }
//   }
// }

// const dog1 = dog('Beef', 2, 'Chihuahua')

// console.log(dog1)
// dog1.bark()

//end

//Start
//Furthermore, if an => function simply returns a value, you can pass it through directly//

// const dog = (name, age, breed) => {
//     name,
//     age,
//     breed,
//     bark() {
//       console.log(`Woof! My name is ${this.name}`)
//     } 
// }

// const dog1 = dog('Beef', 2, 'Chihuahua')

// console.log(dog1)
// dog1.bark()

//end


//Start
//However, the above code is broken. Because {} are how we call out an object and its value. So the bark function is no longer being read as function, but as an object with varibles called out, which has no logic. So we must wrap the object in parentheses() Then we can pass through dog1 data and log the bark function as before//

// const dog = (name, age, breed) => ({
//   name,
//     age,
//     breed,
//     bark () {
//     console.log(`Woof! My name is ${this.name}`)
//   }
// })

// const dog1 = dog('Beef', 2, 'Chihuahua')

// console.log(dog1)
// dog1.bark()

//end


//Start
//How about we add a const Chihuahua back in? We would have to take in name, age breed, and aggression. Then we would have it return an boject, wrap it in parentheses and curly braces ({}). Then we would use the alternative to the `rest Operator` "..." Using it as the `Spread Operator` which removes the containing brackets and applies the properties of a piece of data onto an existing piece of data. So we know by executing dog and passing it name, age, breed, it will make an object with those keys on it. So with the Spread Operator with can spread the dog onto this object, appling the properties of dog onto chihuahua.

// const dog = (name, age, breed) => ({
//   name,
//   age,
//   breed,
//   bark() {
//     console.log(`Woof! My name is ${this.name}`)
//   }
// })

// const chihuahua = (name, age, breed, aggression) => ({ ...dog(name, age, breed) })

// const dog1 = dog('Beef', 2, 'Chihuahua')

// console.log(dog1)
// dog1.bark()

//end


//start
//After that we need to pass aggression and specify dog1 as a chihuahua

// const dog = (name, age, breed) => ({
//   name,
//   age,
//   breed,
//   bark() {
//     console.log(`Woof! My name is ${this.name}`)
//   }
// })

// const chihuahua = (name, age, breed, aggression) => ({ ...dog(name, age, breed), aggression })

// const dog1 = chihuahua('Beef', 2, 'Chihuahua', '15%')
// const dog2 = dog('Bear', 5, 'Cockapoo')

// console.log(dog1,dog2)
// dog1.bark()
// dog2.bark()

//end


//Start
//Now lets create an object with a class. We are going to pass the varibles with a `this` statement.

// class Dog {
//   constructor (name, age, breed) {
//     this.name = name
//     this.age = age
//     this.breed = breed
//   }
// }

//end


//start
//Now we need to substantiate it by creating a new dog object.

// class Dog {
//   constructor(name, age, breed) {
//     this.name = name
//     this.age = age
//     this.breed = breed
//   }
// }

// const dog1 = new Dog('Beef', 2, 'Chihuahua')

// console.log(dog1)

//end


//Start
//Now create a chihuahua class. Use the extends keyword, to specify what this keyword is an extention of? Which for us this would extend Dog. Fo this you would still pass in the same properties, name, age, breed, and now aggression. Then to extend the properties from dog we are going to use the ` Super Method`. Super refers to the constructor that you are inherit from. So you must pass it the properties that it expects to see. Then apply our own custom methods. Then make Beef bark!

// class Dog {
//   constructor(name, age, breed) {
//     this.name = name
//     this.age = age
//     this.breed = breed
//     this.bark = function () {
//       console.log(`Woof! My name is ${this.name}`)
//     }
//   }
// }

// class Chihuahua extends Dog {
//   constructor (name, age, breed, aggression) {
//     super(name, age, breed)
//     this.aggression = aggression
//   }
// }

// const dog1 = new Dog('Bear', 5, 'Cockapoo')

// const dog2 = new Chihuahua('Beef', 2, 'Chihuahua', '15%')

// console.log(dog1,dog2)
// dog2.bark()

//end


//start
//You can also write the bark function outside of the Dog constuctor

class Dog {
  constructor(name, age, breed) {
    this.name = name
    this.age = age
    this.breed = breed
  }
      bark = function () {
      console.log(`Woof! My name is ${this.name}`)
    }
}

class Chihuahua extends Dog {
  constructor(name, age, breed, aggression) {
    super(name, age, breed)
    this.aggression = aggression
  }
}

const dog1 = new Dog('Bear', 5, 'Cockapoo')

const dog2 = new Chihuahua('Beef', 2, 'Chihuahua', '15%')

console.log(dog1, dog2)
dog2.bark()

//end
//This brings using constructors to a closed Now try to make a Tamgotchi Pet ;)

