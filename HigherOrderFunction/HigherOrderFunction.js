// Reference video link :- https://www.youtube.com/watch?v=lZdaLjgmwOU

// Higher Order Function(HOF):-
// Function which takes another function as an arguments is called HOF

// Callback Function(CBF):-
// function which get passed as an argument to another fucntion is called CBF

const add = (a,b)=>{
    return a+b;
}

const mult = (a,b)=>{
    return a*b;
}

const subt = (a,b) =>{
    return Math.abs(a-b);
}

//HOF function
function higherOrder(a,b,operator){
    return operator(a,b);
}


console.log(higherOrder(4,5,add));
console.log(higherOrder(7,5,mult));
console.log(higherOrder(4,9,subt));


