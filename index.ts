// every js file is also a valid ts file!
console.log('hello typescript!')
console.log('hello another time!')
console.log('another line')

let person: string = 'Sidath'
// now my editor is aware of the TYPE of person!
console.log(person.toUpperCase())

let count: number = 100

let sentence: boolean = true

// AVAILABLE TYPES:
// string
// number
// boolean
// undefined and null
// any <-- is a special one!

let thing: any = 50
// console.log(thing.toUpperCase()) // we're allowed to do this but this doesn't work!
// let's try to not use it :)

// count = 'a string'

let anotherStudent = 'Simon'
let anotherCounter = 30
// the ability of TS to automatically understand the types of your variables
// is called TYPE INFERENCE

const additionInJS = (num1, num2) => {
  return num1 + num2
}

console.log(additionInJS(4, 5))
console.log(additionInJS('4', 5)) // this doesn't work :D

const additionThatWorksInJS = (num1, num2) => {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } else {
    return 'wrong arguments!'
  }
}

console.log(additionThatWorksInJS(10, 20))
console.log(additionThatWorksInJS('10', 20))

const additionInTS = (num1: number, num2: number) => {
  return num1 + num2
}

console.log(additionInTS(7, 8))
// console.log(additionInTS(3, '30')) // <-- this doesn't compile because num2 is supposed to be a number!

let stringOrNumber: string | number = '50' // the single pipe | in TS is called TYPE UNION

type StringOrNumber = string | number // defining a custom type, also called a Type ALIAS

const looseAdditionInTS = (num1: StringOrNumber, num2: StringOrNumber) => {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } else {
    return 'please pass consistent arguments :|'
  }
}

// the question mark marks an argument as OPTIONAL (it can also be undefined)
const upToTwoParameters = (arg1, arg2?) => {
  if (arg2) {
    console.log('you passed two arguments!')
  } else {
    console.log('I just got one argument!')
  }
}

upToTwoParameters(2, 3)
upToTwoParameters(78)

// ARRAYS
let arrayOfStrings = ['stefano', 'simon', 'farshad', 'sidath']
// the type is string[], also known as Array<string>
let myArray: Array<StringOrNumber> = [] // <> are technically called a TYPE ARGUMENT
myArray.push(30)
myArray.push('ciao')

myArray.forEach((element) => console.log(element))

arrayOfStrings.forEach((element) => console.log(element.toUpperCase()))

// TUPLE
let verySpecificArray: [string, number, boolean] = ['simon', 10, true]
// a tuple is useful for defining not only the possible types for an array,
// but also the positions for those elements!
console.log(verySpecificArray[0].length)
