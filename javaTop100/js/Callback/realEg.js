function orderFood(callback){
    console.log("Food ordered");

    setTimeout(() =>{
        console.log("Food prepared");
        callback();
    }, 3000);
}

function eatFood(){
    console.log("Eating food : ");
}

orderFood(eatFood);