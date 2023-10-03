//QuerySelector

/*let elm = document.querySelector("p.intro");
// console.log(elm);
elm.innerHTML = "hello";
console.log(elm);*/

/*let elm = document.querySelectorAll("p.intro");
for(let i = 0; i<elm.length; i++){
    elm[i].innerHTML = "hello";
}
console.log(elm);*/

//Traversing elements

/*let elm = document.getElementById("intro");
let prt = elm.parentElement;
prt.innerHTML= "hello";
console.log(elm);*/

/*let elm = document.getElementById("intro");
console.log(elm);*/

/*let elm = document.getElementById("intro");
let node = elm.firstElementChild;
console.log(node);*/

/*let elm = document.getElementById("intro");
let node = elm.previousElementSibling;
console.log(node);*/

//innerHTML

// let elm = document.getElementById("intro");
// let content = elm.innerHTML;
// console.log(content);

//set

// let elm = document.getElementById("intro");
// elm.innerHTML= "<h2>this is a heading </h2>"

//Create and Append Element

// let elm = document.getElementById("intro");

// let h1 = document.createElement('h1');
// h1.className = 'try';
// h1.id = "intro";

// //let text = document.createTextNode("This is a h1 tag");

// //h1.appendChild(text);
// //elm.appendChild(h1);

// h1.textContent = "content added";

// document.body.appendChild(h1);

// // let pra = document.getElementById("p1");
// // console.log(pra.textContent);

/*let list1 = document.getElementById("list");

let item = document.createElement("li");
item.textContent= "new list 5";

list1.appendChild(item);*/

//Insert Before

/*let list1 = document.getElementById("list");

let item = document.createElement("li");
item.textContent= "new list 5";

let pos = list1.firstElementChild.nextElementSibling.nextElementSibling;

list1.insertBefore(item,pos);*/

/*let parent = document.body;
let elm = document.createElement("h2");
elm.textContent = "this is a new element";

let list = document.getElementById("list");
parent.insertBefore(elm, list);*/

//Remove Child Element

// let parent = document.getElementById('menu');
// let elm = parent.firstElementChild;
// parent.removeChild(elm);

//clone element

// let menu = document.getElementById("menu");
// let cloneElm = menu.cloneNode(true);
// cloneElm.id="mobile";

// console.log(cloneElm);
// document.body.appendChild(cloneElm);

//Replace Element

/*let parent = document.getElementById("menu");

let item = document.createElement("li");
item.textContent = "Services";

let replace = parent.firstElementChild.nextElementSibling;

parent.replaceChild(item,replace);*/

//Insert Adjacent Html

// let elm = document.getElementById("intro");
// let html = "<h1>NEW H1</h1>";
// elm.insertAdjacentHTML('beforebegin',html);

//change Attributes

/*let btn = document.getElementById("btn");
btn.setAttribute("class","form");

//let val = btn.getAttribute("name");
//let val = btn.removeAttribute("name");

let val = btn.hasAttribute("name");
 console.log(val);*/


 //inlineStyle

 /*let btn = document.getElementById("btn");

 //btn.style.cssText = "background-color: red; color:white";

//btn.setAttribute('style','color:white; background-color:blue;');

//btn.style.color = "blue";

//btn.style.background = "pink";*/


//Get Commputed CSS

// let btn = document.getElementById("btn");

// let css = getComputedStyle(btn);
// console.log(css.color);


//CSS Classes

/*let box = document.getElementById("box");
//console.log(box.className);
//box.className += " dim";

// console.log(box.classList);

// for(let css of box.classList){
//     console.log(css);
// }

//box.classList.add("dim");
//box.classList.remove("color")
//box.classList.replace("color","dim");

// let result = box.classList.contains("color");
// console.log(result);

let result = box.classList.toggle("dim");*/

//Width and Height of an Element

// let box = document.getElementById("box");

// // let width = box.offsetWidth;
// // let height = box.offsetHeight;

// let width = box.clientWidth  ;
// let height = box.clientHeight;


// console.log(width);
// console.log(height);

//DOM
//search list of dom event
//inline method

/*// function btnclick(){
//     alert("button was clicked!");
// }

let btn = document.getElementById("btn");
//btn.addEventListener('click',btnclick);

btn.addEventListener('click', function(){
    alert("btn was clicked!");
});

btn.addEventListener('mouseover', function(){
    alert("mouse over is activated");
});

btn.addEventListener('mouseout', function(){
    alert("mouse out is activated");
});*/


//Remove Event Listener

/*let btn = document.getElementById("btn");

function click1(){
    alert("click1 activated");
}

function click2(){
    alert("click2 activated");
}

btn.addEventListener('click',click1);
btn.addEventListener('click',click2);*/

//Eevent Bubbling & Event Capturing

// let d = document.getElementById("myDiv");
// let b = document.getElementById("btn");

// b.addEventListener('click', btnClicked,);
// d.addEventListener('click', divClicked);
// document.body.addEventListener('click', bodyClicked);

// function btnClicked(n){
//     console.log("button clicked......");
//     n.stopPropagation();
// }

// function divClicked(n){
//     console.log("div clicked.......");
//     n.stopPropagation();
// }

// function bodyClicked(n){
//     console.log("body clicked........");
//     n.stopPropagation();
// }


//Prevent Default

let link = document.getElementById("an");

link.addEventListener('click',function(n){
    n.preventDefault();
    console.log("link clicked...");
});

/*let form = document.getElementById("myform");

form.addEventListener('submit', function(e){
    e.preventDefault();
});*/




