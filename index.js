function add(a, b){
return a + b ;
}

function subtract(b, a){
return b - a ;
}

function multiply(a, b){
return a * b ;
}

function divide(a, b){
return a / b ;
}

function increment(n){
return (n += 1); 
}
function decrement(n){
    return (n -= 1);
}

function makeInt(n){
    return parseInt(n, 10);
    
}

// function makeInt(n){
//  return parseInt("0x", 10);
// }
 
 function preserveDecimal(n){
    return parseFloat(n);
    
 }
 console.log(makeInt("2.1"))
 console.log(preserveDecimal("2.1"))
