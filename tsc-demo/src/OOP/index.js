// creating class 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// class Anar {
//     nickname?: string
//     constructor(
//         public readonly id: number,
//         public owner: string,
//         private _balance: number) {
//     }
//     deposite(amount: number): void {
//         if (amount < 0)
//             throw new Error('Invalid amount')
//         this._balance += amount
//     }
//     get balance(): number {
//         return this._balance
//     }
//     set balance(value: number) {
//         if (value < 0)
//             throw new Error('Invalid amount')
//         this._balance = value
//     }
// }
// creating object 
// let account = new Anar(1, 'Anar', 300)
// console.log(account.balance)
// Index signatures 
var SeatAssignment = /** @class */ (function () {
    function SeatAssignment() {
    }
    return SeatAssignment;
}());
var seats = new SeatAssignment();
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
var Ride = /** @class */ (function () {
    function Ride() {
    }
    Ride.prototype.start = function () { Ride.activeRiders++; };
    Ride.prototype.stop = function () { Ride.activeRiders--; };
    Ride.activeRiders = 0;
    return Ride;
}());
var ride1 = new Ride();
ride1.start();
var ride2 = new Ride();
ride2.stop();
// console.log(Ride.activeRiders, Ride.activeRiders)
//Inheritance 
// class Person {
//     constructor(
//         public firstname: string,
//         public lastname: string,
//     ) { }
//     get fullName() {
//         return this.firstname + ' ' + this.lastname
//     }
//     walk() {
//         console.log('Walking')
//     }
// }
// class Student extends Person {
//     constructor(public studentId: number, firstname: string, lastname: string) {
//         super(firstname, lastname)
//     }
//     takeTest() {
//         console.log('Taking Test')
//     }
// }
// let s1 = new Student(1, 'Anar', 'Kerimli')
// console.log(s1.fullName)
// Override 
// class Teacher extends Person {
//     override get fullName() {
//         return 'Professor ' + super.fullName
//     }
// }
// let teacher = new Teacher('Anar', 'Kerimli')
// console.log(teacher.fullName)
// Polymorphism 
// printName([
//     new Student(1, 'Turan', 'Kerimov'),
//     new Teacher('Anar', 'Kerimli'),
// ])
// function printName(people: Person[]) {
//     for (let person of people)
//         console.log(person.fullName)
// }
//Private vs Protected
//private yalniz class daxilinde cagrila biler ver inheritance olmur, protected ise inheritance ola bilir => Private members are not inherited by child classes. 
//Abstract Class and Methods
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius, color) {
        var _this = _super.call(this, color) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.render = function () {
        console.log('Rendering a circle');
    };
    return Circle;
}(Shape));
var shape = new Circle(3, 'red');
shape.render();
var GoogleCalendar = /** @class */ (function () {
    function GoogleCalendar(name) {
        this.name = name;
    }
    GoogleCalendar.prototype.addEvent = function () {
        throw new Error("Method not implemented.");
    };
    GoogleCalendar.prototype.removeEvent = function () {
        throw new Error("Method not implemented.");
    };
    return GoogleCalendar;
}());
//Exercise 
//1
var Logger = /** @class */ (function () {
    function Logger(fileName) {
        this.fileName = fileName;
    }
    Logger.prototype.log = function (message) { };
    return Logger;
}());
var employee = {
    name: 'John Smith',
    salary: 50000,
    address: {
        street: 'Flinders st',
        city: 'Melbourne',
        zipCode: 3144
    }
};
// let globalString: string;
// setGlobalString("this string is set");
// console.log(`globalString = ${globalString!}`);
// function setGlobalString(value: string) {
//     globalString = value;
// }
var u = "an unknown";
u = 1;
var aNumber2;
aNumber2 = u;
console.log(typeof u, u);
