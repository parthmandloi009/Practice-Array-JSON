//What is Class?
// Classes are a template for creating objects.They encapsulate data with code to work on that data.

//What is an Objects?
//Object is an instance of class which has all properties and methods of the class.

//Two ways of writing classes and objects:-
//1)Using Javascript OOP using Prototype
//2)Using Es6

//Discuss drawbacks and  also discuss "use strict":-
/* es5 way to creting a classes in Javascript */
function Trainer(){
    this.name = "ABC Tutorial."
}

Trainer.prototype.setName = function(name){
    this.name = name;
}

Trainer.prototype.sayHello = function(){
    console.log(this.name);
}

var myTrainner = new Trainer();//creating an object using the class trainer
myTrainner.setName("Parth Mandloi") //calling the method to set the value
myTrainner.sayHello(); //printing the name using another method sayHello