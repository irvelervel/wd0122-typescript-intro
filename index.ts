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

// OBJECTS
let student = {
  name: 'Stefano',
  surname: 'Casasola',
  batch: 'WD012022',
  year: 2022,
}

console.log(student.name.slice(0, 1))
// console.log(student.firstName) // error, because it doesn't exist!

// an interface is a way of defining a SHAPE for objects in TS
// interfaces start with a capital letter
interface EpicodeStudent {
  // list here the properties for your object, with a corresponding type
  name: string
  surname: string
  batch: string
  year?: number | string
}

const marchStudent: EpicodeStudent = {
  name: 'Simon',
  surname: 'Kovac',
  batch: 'WD012022',
}

let arrayOfStudents: EpicodeStudent[] = []
arrayOfStudents.push(marchStudent, student)

arrayOfStudents.forEach((s) => console.log(s.surname))

let justNames = arrayOfStudents.map((s) => s.name)
justNames.forEach((name) => console.log(name.toLowerCase()))

interface EpicodeTeacher {
  name: string
  surname: string
  skills: string[]
  age: number
}

const unit2Teacher: EpicodeTeacher = {
  name: 'Stefano',
  surname: 'Miceli',
  skills: ['fe', 'bootstrap', 'js'],
  age: 33,
}

const unit3Teacher: EpicodeTeacher = {
  name: 'Stefano',
  surname: 'Casasola',
  skills: ['react', 'redux', 'ts'],
  age: 35,
}

let arrayOfTeachers: Array<EpicodeTeacher> = [unit2Teacher, unit3Teacher]

arrayOfTeachers.forEach((t) => {
  t.skills.forEach((s) => console.log(s))
})

interface CustomLocation {
  city: string
  address: string
  zipCode?: number
}

interface Student {
  name: string
  location: CustomLocation
}

const myStudent: Student = {
  name: 'Giorgio',
  location: {
    city: 'Venice',
    address: 'Via Santi Martiri 20',
  },
}

// difference between Type and Interface?
// interfaces can be EXTENDED

interface HumanBeing {
  name: string
  age: number
}

interface TennisPlayer extends HumanBeing {
  favouriteHand: string
  numberOfTournamentsWon: number
}

let nadal: TennisPlayer = {
  name: 'Rafael Nadal',
  age: 36,
  favouriteHand: 'left',
  numberOfTournamentsWon: 100,
}

// GENERICS
// they are useful for allowing some flexibility in your interface
// in order to RE-USE it the most amount of times possible!
interface EpicodeModule<T> {
  name: string
  number: number
  topics: T // this will vary every time you're using this interface!
  // this adds some flexibility to your interface!
}

// in the fifth module you learned a lot of topics!
// so in here I want topics to be string[]
let fifthModule: EpicodeModule<string[]> = {
  name: 'M5',
  number: 5,
  topics: ['js', 'dom_manipulation', 'loops'],
}

let fourteenthModule: EpicodeModule<string> = {
  name: 'M14',
  number: 14,
  topics: 'Redux',
}

// D R Y
// Don't Repeat Yourself!
