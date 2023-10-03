// Json  Object

const person = {
    MyName : "Nithiskumar",
    age : 22,
    email : "nithis@gmail.com"
};

//Json Array

const fruits = ["apple","orange","banana"];

//Parse Json

const jsonString = '{"name": "Rahulkumar","age:30"}';
const person1 = JSON.parse(jsonString);
console.log(person1.name);