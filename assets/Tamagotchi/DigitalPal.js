//Below is the constructor, that provides properties and their values for the var DigitalPal. This constructor also includes the Function of our DigitalPal, outside of the class constructor, but with-in the class itself.
class DigitalPal {
  constructor() {
    this.hungry = false
    this.sleepy = false
    this.bored = true
    this.age = 0
    this.outside = false
    this.houseCondition = 100
  }
  //this is a function
  feed() {
    if (this.hungry) {
      console.log('That was yummy!')
      this.hungry = false
      this.sleepy = true
    } else {
      console.log('No thanks! I am full.')
    }
  }
  //this is a function
  sleep() {
    if (this.sleepy) {
      console.log('Zzzzzz')
      this.sleepy = false
      this.bored = true
      this.increaseAge()
    } else {
      console.log('No way! I am not tired.')
    }
  }
  //this is a function
  play() {
    if (this.bored) {
      console.log('Yay! Let us play!')
      this.bored = false
      this.hungry = true
    } else {
      console.log('Not right now. Later?')
    }
  }
  //this is a function
  increaseAge() {
    this.age++
    console.log(`Happy Birthday to me! I am ${this.age} days old!`)
  }
  //this is a function
  bark() {
    console.log('Woof! Woof!')
  }
  //this is a function
  goOutside() {
    if (!this.outside) {
      console.log('Yay! I love the outdoors!')
      this.outside = true
      this.bark()
    } else {
      console.log('We are already outside though...')
    }
  }
  //this is a function
  goInside() {
    if (this.outside) {
      console.log('Do we have to? Fine...')
      this.outside = false
    } else {
      console.log('I am already inside...')
    }
  }
  //this is a function
  destroyFurniture() {
    if (this.houseCondition <= 0) {
      console.log('The furniture is already destroyed! HAHAHA')
    } else {
      this.houseCondition -= 10
      console.log('MUAHAHAHAHA! TAKE THAT FURNITURE!')
      this.bored = false
      this.sleepy = true
    }
  }
  //this is a function
  buyNewFurniture() {
    this.houseCondition += 50
    console.log('Are you sure about that?')
  }
}
//Below exports the data from DigitalPals.js to any accepting file using the Require Method
module.exports = DigitalPal
