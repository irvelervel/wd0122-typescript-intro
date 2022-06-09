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
console.log(thing.toUpperCase())
// let's try to not use it :)

// count = 'a string'

let anotherStudent = 'Simon'
let anotherCounter = 30
// the ability of TS to automatically understand the types of your variables
// is called TYPE INFERENCE
