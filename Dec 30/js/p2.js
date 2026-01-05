alert("Hello js");

var a = 10;
let b = 20;
const c = 3.14;

let name ="Evan"
const age  =21;

console.log(name);
console.log(age);


let x = 10;
let y ="Hello";
let z = true;
let a;
let q = null;


console.log(typeof x);

console.log(a-b);


alert("Hello");
console.log("Hello");
document.write("hello");


let value = document.getElementById("n1").value;

let ages=30;
if(ages>= 10){
    console.log("Eligible");
}
else{
    console.log("Not eligible");
}



let marks = 75;

if(marks >= 90){
    console.log("A");
}
else if(marks>= 60){
    console.log("B");
}
else{
    console.log("C");
}


for(let i =1; i<=5; i++){
    console.log(i);
}


let i =1;

while(i<=5){
    console.log(i);
    i++;
}


function add(a,b){
    return a+b;
}

let res = add(5,2);
console.log(res);


let nums = [10, 20, 30];

console.log(nums[0]);


let person ={
    name: "Evan", 
    age: 23,
    city: "Pune"
};


console.log(person.name);


<h1 id ="msg"></h1>
document.getElementById("msg").innerText + "Hello DOM";




//Events

<button onclick="sayHello()"> Click</button>
function sayHello(){
    alert("Hey!");
}



