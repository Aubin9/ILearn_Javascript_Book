// Classes enable OOP

//Classes and objects
/*let dog = {
    dogName: "ducki",
    weight: 2.4,
    color: "black",
    breed: "Chihuahua"
}

//create class
class ClassName {
    constructor(prop1, prop2) {
        this.prop1=prop1;
        this.prop2=prop2;
    }
}
let obj = new ClassName("arg1", "arg2");

//create a certain class like a function
function TheDog(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
}
let thedog = new TheDog("Jacky", 30, "brown", "labrador");

//exemple of using classes
class Dog {
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }
}
let dogg = new Dog("Ducki", 2.4, "brown", "chihuahua"); 
alert(`${dogg.dogName} is a ${dogg.breed} and weighs ${dogg.weight} kg. He has a ${dogg.color} color`);*/











//Practice exercise 7.1: create a person class and print instances of friends' name
/*class Person {
    constructor(fName, lName, age){
        this.fName=fName;
        this.lName=lName;
        this.age=age;
    }
}
let usr1 = new Person("Aubin", "SIAHA", 19);
let usr2 = new Person("Dupont", "ROME", 21);
alert(`Hi ${usr1.fName} ${usr1.lName}, have a great learning journey in JavaScript !! \nYour friend: ${usr2.fName} ${usr2.lName}`);
*/

//Functions on a class are called methods
/*class Person {
        constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        alert("Hi there! I'm "+ this.firstname+" "+this.lastname);
    }
    compliment(name, object) {
        return "That's a wonderful " + object + ", " + name;
    }
}
let p = new Person("Aubin", "SIAHA");
p.greet();
let compliment = p.compliment("Harry", "hat");
alert(compliment);*/








// * Practice exercise 7.2: get your friend's full name
/*class Person {
    constructor(fName, lName, age){
        this.fName=fName;
        this.lName=lName;
        this.age=age;
    }
    fullName(){
        return this.fName + " " +this.lName;
    }
}
let usr1 = new Person("Aubin", "SIAHA", 19);
let usr2 = new Person("Dupont", "ROME", 21);
alert(`Hi  ${usr1.fullName()} and ${usr2.fullName()}`);*/

//This is how to add properties that aren't accessible from outside. We
// prefix them with a # symbol (private)
/*class Person {
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }
    /*constructor(firstname, lastname) {
    if(firstname.startsWith("M")){
        this.#firstname = firstname;
    } else {
        this.#firstname = "M" + firstname;
    }
    this.#lastname = lastname;
    }*/ /*
}
let p = new Person("Maria", "Saga");
alert(p.firstname); // return undified */


//setters and getters -> accessors: set, get Encapsulation
/*class Person {
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }
    get firstname() {
        return this.#firstname;
    }
    set firstname(firstname) {
        if(firstname.startsWith("M")){
            this.#firstname = firstname;
        } else {
            this.#firstname = "M" + firstname;
        }
    }
    get lastname() {
        return this.#lastname;
    }
    set lastname(lastname) {
        this.#lastname = lastname;
    }
}
let p = new Person("Aubin", "SIAHA");
alert(p.firstname);
p.firstname = "TOUKO"; //update the first name, possible 'cause of set
alert(p.firstname);*/

//Inheritance: classes can have child classes that inherit the properties and methods from the parent class. 
/*class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    move() {
        alert("moving at "+ this.currentSpeed);
    }
    accelerate(amount) {
        this.currentSpeed += amount;
    }
}
//inherit  class extend => the class is a child of another
//Motorcycle: this is the child class
class Motorcycle extends Vehicle { 
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed); //this is the constructor from the parent class
        this.fuel = fuel;
    }
    doWheelie() {
        alert("Driving on one wheel!");
    }
}
// calling them
let motor = new Motorcycle("Black", 0, 250, "gasoline");
alert("The color is: "+motor.color);
motor.accelerate(50);
motor.move();*/




//Prototypes
/*class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        alert("Hi there!");
    }
}
// here is how to add a function to this class using prototype
Person.prototype.introduce = function () {  = function (){
    return this.species+ " is eating";
}
    alert("Hi, I'm "+ this.firstname);
}
//
Person.prototype.favoriteColor = "green";
let p = new Person("Aubin", "SIAHA");
alert(p.favoriteColor);
p.introduce();*/








//Practice exercise 7.3
/*class Animals {
    constructor(species, sound){
        this.species=species;
        this.sound=sound;
    }
    printAnimal (){
        alert(`${this.species} animal sound's like ${this.sound}`);
    }
}
Animals.prototype.eat = function (){
    return this.species + " is eating";
}
let cat = new Animals("cat", "miaou");
let dog = new Animals("Dog", "wop wop wop");
dog.printAnimal();
alert(cat.eat());
alert(dog);*/

// Project 1: Employee tracking app

/*class Employee {
    constructor(fName, lName, year){
        this.fName=fName;
        this.lName=lName;
        this.year=year;
    }
}
const person1 = new Employee("Aubin", "SIAHA", 3);
const person2 = new Employee("Dupont", "DOUMP", 5);
const employ = [person1, person2];

Employee.prototype.details = function () {
    return this.fName + " "+ this.lName+ " has worked here for "+this.year+" years";
    employ.forEach((person) => {
        alert(person.details());
    });
}
alert(person1.details());*/
// Project 2: Menu items price calculator
class Menu {
    #offer1 = 10;
    #offer2 = 20;
    constructor(val1, val2) {
        this.val1 = val1;
        this.val2 = val2;
    }
    calTotal(){
        return (this.val1 * this.#offer1) + (this.val2 * this.#offer2);
    }
    get total(){
        return this.calTotal();
    }
}
const val1 = new Menu(2,0);
const val2 = new Menu(1,3);
const val3 = new Menu(3,2);
alert(val1.total);
alert(val2.total);
alert(val3.total);




