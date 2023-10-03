// let person1 = {
//     firstName: 'Rahul',
//     lastName: 'Kumar',
//     age: 27

// console.log(person1.age);

// let person2 = {
//     FirstName : 'Nithish',
//     LastName : 'Kumar',
//     Age : 25
// };

// fullName: function() {
//         console.log(this.firstName + " " + this.lastName);
//     }

// };
// person1.fullName();


// let man = {};

// man.name = "RahulKumar";
// man.sayHi = function(){
//     alert("Hi...");
// }
// console.log(man);
// man.sayHi();

// let person1 = new Object();







// let person1 = {
//     firstName: 'Nithis',
//     lastName: 'Kumar',
//     age:22,

//     fullNmae: function(){
//         console.log(this.firstName+" "+this.lastName);
//     }
// };
// person1.fullNmae()


// let person2 = {
//     firstName: 'Rahul',
//     lastName: 'Kumar',
//     age:27,

//     fullNmae: function(){
//         console.log(this.firstName+" "+this.lastName);
//     }
// };
// person2.fullNmae()



// function Person(first,last,a){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = a ;


//     this.changeAge = function(newAge){
//         this.age = newAge;
//     }
// }

// let person1 = new Person("Nithis","Kumar",22);
// person1.changeAge(21);
// let person2 = new Person("Rahul","Kumar",27);
// console.log(person1);
// console.log(person2);



// let person1 = {};
// console.log(person1);

// let person2 ={
//     name : "Rahulkumar"
// };

// console.log(person2.hasOwnProperty('name'));

// function Person(n){
//     this.name = n;
// }
// let person3 = new Person('NithisKumar')
// console.log(person3);




// function Person(first,last,a){

//     this.firstName = first;
//     this.lastName = last;
//     this.age = a;

//     this.fullName = function(){
//         console.log(this.firstName+" "+this.lastName);
//     }
//  }

//  function Person(first,last,a){

//     this.firstName = first;
//     this.lastName = last;
//     this.age = a;

//     Person.prototype.fullName = function(){
//         console.log(this.firstName+" "+this.lastName);
//     }
//  }
// let person1 = new Person("Rahul","Kumar",28);
// let person2 = new Person("Nithis","Kumar",22);

// console.log(person2.fullName());



//Inheritance


// function Creature(ls){
//     this.lifespan = ls;
// }
// Creature.prototype.breath = function(){
//     console.log("Breaking....");
// }
// let Creature1 = new Creature(100);

// console.log(Creature1);

// Person.prototype = Object.create(Creature.prototype);