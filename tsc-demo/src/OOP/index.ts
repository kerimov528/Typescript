// creating class 

/* class Account {
    readonly id: number  // only can be change inside of constructor
    owner: string
    private _balance: number
    nickname?: string

    constructor(id: number, owner: string, balance: number) {
        this.id = id
        this.owner = owner
        this._balance = balance
    }

    deposite(amount: number): void {
        if (amount < 0)
            throw new Error('Invalid amount')

        this._balance += amount
    }
} */


// Access Control Keywords - public, private, protected

//7- Parameter Properties
class Anar {
    nickname?: string

    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number) {
    }

    deposite(amount: number): void {
        if (amount < 0)
            throw new Error('Invalid amount')
        this._balance += amount
    }

    get balance(): number {
        return this._balance
    }

    set balance(value: number) {
        if (value < 0)
            throw new Error('Invalid amount')
        this._balance = value
    }
}


// creating object 
let account = new Anar(1, 'Anar', 300)
// console.log(account.balance)

// Index signatures 

class SeatAssignment {

    [seatNumber: string]: string
}

let seats = new SeatAssignment();
seats.A1 = 'Anar'
seats.A2 = 'Kerimli'

// console.log(seats.A1)


//Static Members 

/* class Ride {
    activeRiders: number = 0

    start(): void { this.activeRiders++ }
    stop(): void { this.activeRiders-- }
}

let ride1 = new Ride()
ride1.start()

let ride2 = new Ride()
ride2.stop()

console.log(ride1.activeRiders, ride2.activeRiders) 
*/

class Ride {
    static activeRiders: number = 0

    start(): void { Ride.activeRiders++ }
    stop(): void { Ride.activeRiders-- }
}

let ride1 = new Ride()
ride1.start()

let ride2 = new Ride()
ride2.stop()

// console.log(Ride.activeRiders, Ride.activeRiders)


//Inheritance 

class Person {
    constructor(
        public firstname: string,
        public lastname: string,
    ) { }

    get fullName() {
        return this.firstname + ' ' + this.lastname
    }

    walk() {
        console.log('Walking')
    }
}

class Student extends Person {
    constructor(public studentId: number, firstname: string, lastname: string) {
        super(firstname, lastname)
    }

    takeTest() {
        console.log('Taking Test')
    }
}

let s1 = new Student(1, 'Anar', 'Kerimli')
// console.log(s1.fullName)

// Override 

class Teacher extends Person {
    override get fullName() {
        return 'Professor ' + super.fullName
    }
}

// let teacher = new Teacher('Anar', 'Kerimli')
// console.log(teacher.fullName)


// Polymorphism 

printName([
    new Student(1, 'Turan', 'Kerimov'),
    new Teacher('Anar', 'Kerimli'),
])

function printName(people: Person[]) {
    for (let person of people)
        console.log(person.fullName)
}

//Private vs Protected
//private yalniz class daxilinde cagrila biler ver inheritance olmur, protected ise inheritance ola bilir => Private members are not inherited by child classes. 

//Abstract Class and Methods

abstract class Shape {
    constructor(public color: string) { }

    abstract render(): void
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color)
    }

    override render(): void {
        console.log('Rendering a circle')
    }

}

let shape = new Circle(3, 'red')
shape.render()


//Interfaces

interface ICalendar {
    name: string
    addEvent(): void
    removeEvent(): void
}

interface ICloudCalendar extends ICalendar {
    sync(): void
}

class GoogleCalendar implements ICalendar {
    constructor(public name: string) { }
    addEvent(): void {
        throw new Error("Method not implemented.")
    }
    removeEvent(): void {
        throw new Error("Method not implemented.")
    }

}


//Exercise 

//1

class Logger {
    constructor(public fileName: string) { }

    log(message: string) { }
}

//2

class Personss {
    constructor(public firstName: string, public lastName: string) { }

    get fullName() {
        return this.firstName + ' ' + this.lastName
    }
}

//3 

class Employeess extends Person {
    constructor(firstname: string, lastname: string, public salary: number) {
        super(firstname, lastname)
    }
}

//4

interface Address {
    street: string
    city: string
    zipCode: number
}

interface Employee {
    name: string
    salary: number
    address: Address
}

let employee: Employee = {
    name: 'John Smith',
    salary: 50_000,
    address: {
        street: 'Flinders st',
        city: 'Melbourne',
        zipCode: 3144,
    },
};