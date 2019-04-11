/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. in implicit binding this refers to what ever is to the left of the
dot notation in a function. the function can contain different methods

* 2. in explicit binding we tell a fuction what this is going to be using
.call .apply .bind.

* 3. whenever you have a function invoked with a new keyword.
 the this keyword is being bound to the keyword being constructed

* 4. the window binding is if none of these rules apply.
then the this keyword is going to default to the window object.
unless your in strict mode then it will be undefined.

*
* write out a code example of each explanation above
*/

// Principle 1 - Implicit binding

var animalSound = function(obj) {
    obj.makeSound = function(){
    console.log(this.sound);
    };
};

let dog = {
    sound: 'Bark'
};

let snake = {
    sound: 'sssss'
};

animalSound(dog);
animalSound(snake);

dog.makeSound();
snake.makeSound();


// Principle 2 - Explicit binding

let sayName = function(place1, place2, place3) {
    console.log(`${this.name} has traveled to ${place1}, ${place2}, and ${place3}`)
}

let Justin = {
    name: 'Justin'
}

let places = ['Rome', 'Paris', 'Babylon'];

sayName.call(Justin, places[0], places[1], places[2]);


// Principle 3 - New binding
let Profile = function(name, username, password){
    this.name = name;
    this.username = username;
    this.password = password;
};

let myProfile = new Profile('Jordan', 'Jdawg', 'abcd1234');

console.log(myProfile);

// Principle 4 - Window binding

let sayColor = function(){
    // 'use strict';
    console.log(this.color);
};

let crayon = {
    color: 'blue'
};

sayColor();
window.color = 'red';
sayColor();