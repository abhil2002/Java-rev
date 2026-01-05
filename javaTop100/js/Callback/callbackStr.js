function greet(name){
    console.log("hello " + name);
}

function processUser(callback){
    callback("Abhishek");
}

processUser(greet);