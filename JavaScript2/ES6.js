//default parameters

// function talk(msg = "hii...hello.."){
//     console.log(msg);
// }
// talk();

//ES6 REST PAREMETERS

// function sum(a,b){
//     return a+b;
// }
// sum(2,4);/

// function sum(...arg){
//     console.log(arg);
// }
// sum(1,2);

/*function sum(...nkr){
    let result = 0;

    for(let i=0; i<nkr.length; i++){
        result += nkr[i];
    }
    console.log(result);
}
sum(11,22,33,44);*/

//ES6 Spread Operator

// let array1 = [2,4,6];
// let array2 = [4,6,8, ...array1];
// console.log(array2);

// let array1 = [2,4,6];
// let array2 = [...array1,4,6,8];
// console.log(array2);


// let array1 = [2,4,6];
// let array2 = [4,6,8];
// let array3 = [...array1,...array2];
// console.log(array3);


//ES6   for...of

// let mark = [72,81,48,78,100];

// for(let x of mark){
//     console.log(x);
// }

// let word = "NITHISKUMAR";
// for(let n of word){
//     console.log(n);
// }

//ES6 Template Literals

// let str = "NITHISKUMAR"
// console.log(`My Name is ${str}.`);/

//ES6 Array Destructuring

// let book = ["java","react","vuejs","nodejs"];
// console.log(book[1]);/

// let book = ["javascript","css","html",150,200];
// let sub = book[0];
// console.log(sub);

// let book = ["javascript","css","html",150,200];
// let sub = book[0];
// let sub2 = book[2];
// let sub3 = book[3];
// console.log(sub3);

// let book = ["javascript","css","html",150,200];
// let [sub1,sub2,sub3,sub4,sub5] = book
// console.log(sub5);

// let book = ["javascript","css","html",[150,200]];
// let [sub1,sub2,sub3,[sub4,sub5]] = book;

// console.log(sub3);

// function book(){
//     return "book";
// }
// let sub = book();
// console.log(sub);

// function book(){
//     return ["javascript",2000];
// }
// let [book_title,price] = book();
// console.log(price);

//ES6 Object Destructuring

// let book = {
//     fullName : "advance js",
//     page : 200,
//     price : 150
// };
// let Name = book.fullName
// console.log(Name);/

// let book = {
//     fullName : "advance js",
//     page : 200,
//     price : 150
// };
// let{fullName,page,price} = book;
// console.log(fullName);

// let book = {
//     firstName : "Nithis",
//     lastName : "Kumar",
//     subject : "Javascript",
//     Role : "developer",

//     publication :{
//         birth : 2000,
//         age : 22
//     }
// };

// let{firstName,lastName,subject,Role, publication: {birth,age}} = book;
// console.log(Role); 