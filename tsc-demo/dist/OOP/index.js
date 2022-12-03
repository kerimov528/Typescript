"use strict";
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
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposite(amount) {
        if (amount < 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            throw new Error('Invalid amount');
        this._balance = value;
    }
}
// creating object 
let account = new Anar(1, 'Anar', 300);
// console.log(account.balance)
// Index signatures 
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'Anar';
seats.A2 = 'Kerimli';
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
    start() { Ride.activeRiders++; }
    stop() { Ride.activeRiders--; }
}
Ride.activeRiders = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.stop();
// console.log(Ride.activeRiders, Ride.activeRiders)
//Inheritance 
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullName() {
        return this.firstname + ' ' + this.lastname;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(studentId, firstname, lastname) {
        super(firstname, lastname);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking Test');
    }
}
let s1 = new Student(1, 'Anar', 'Kerimli');
// console.log(s1.fullName)
// Override 
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
// let teacher = new Teacher('Anar', 'Kerimli')
// console.log(teacher.fullName)
// Polymorphism 
printName([
    new Student(1, 'Turan', 'Kerimov'),
    new Teacher('Anar', 'Kerimli'),
]);
function printName(people) {
    for (let person of people)
        console.log(person.fullName);
}
//Private vs Protected
//private yalniz class daxilinde cagrila biler ver inheritance olmur, protected ise inheritance ola bilir => Private members are not inherited by child classes. 
//Abstract Class and Methods
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('Rendering a circle');
    }
}
let shape = new Circle(3, 'red');
shape.render();
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
//Exercise 
//1
class Logger {
    constructor(fileName) {
        this.fileName = fileName;
    }
    log(message) { }
}
//2
class Personss {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
//3 
class Employeess extends Person {
    constructor(firstname, lastname, salary) {
        super(firstname, lastname);
        this.salary = salary;
    }
}
let employee = {
    name: 'John Smith',
    salary: 50000,
    address: {
        street: 'Flinders st',
        city: 'Melbourne',
        zipCode: 3144,
    },
};
//# sourceMappingURL=index.js.map