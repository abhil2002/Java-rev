let arr =[];
let n = prompt("Enter no. of fruits : ");

for(let i =0; i<n; i++){
    let res = prompt("Enter fruit" + (i+1)+ " :");
    arr.push(res);
}

console.log(arr);