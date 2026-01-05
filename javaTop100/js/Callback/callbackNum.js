function add(a, b, c){
    let result = a+b;
    c(result);
}

function showResult(res){
    console.log("Result is : ", res);
}

add(10, 20, showResult);