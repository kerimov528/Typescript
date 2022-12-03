let num: number = 123_456_789



// ADVANCED TYPES 

// *- Enum

const enum Sizes { Small = 10, Medium, Large }
let mySize: Sizes = Sizes.Large
console.log(mySize)

// *- Literal Types

type Size = 'cm' | 'inch'

let size: Size = 'inch'
console.log(size)



// 6-Nullable Types

function greet(name: null | string | undefined) {
    console.log(name)
}

greet(null)

// 7- Optional Chanining

type br = {
    birthday: Date
}

function getCustomer(id: number): br | null {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1)
console.log(customer?.birthday)

/** if the given value is null or undefined we can use Optional Chanining */


// 8- The Nullish Coaelscing Operator

// ?? , it means, if speed is not falsy value then speed is 30

let speed: number | null = null
let ride = {
    speed: speed ?? 30
}
// 9- Type Assertation
// we use as 
//HTMLElement
//HTMLInputElement

// 10- The unknown Type

// function render(document: unknown) {
//     if(document instanceof WordDocument) {
//         document.toUpperCase()
//     }
//     document.move();
// }

// 11- The never Type 


// Exercise

// 1
type Users = {
    name: string
    age: number
    occupation?: string
}

let users: Users[] = [
    {
        name: 'John Smith',
        age: 30,
        occupation: 'Software engineer'
    },
    {
        name: 'Kate Müller',
        age: 29
    }
];

//2

type Bird = {
    fly: () => void
}

type Fish = {
    swim: () => void
}

type Pet = Bird | Fish

//3 

type weeks = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

//4

// let user = getUserss();
// console.log(user?.address?.street);

// let x = foo ??  bar();

//5

let value: unknown = 'a'
if (typeof value === 'string')
    console.log(value.toUpperCase)