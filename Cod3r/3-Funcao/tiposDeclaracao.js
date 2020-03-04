console.log(soma(3, 4))// funciona antes ou depois da função

// function declaration
function soma(x ,y){
    return x + y
}

// function expression
const sub = function(x , y){
    return x - y
}
console.log(sub(4, 3)) // só funciona depois da função

// named function expression
const mult = function mult(x ,y){
    return x * y
}
console.log(mult(4, 3))// só funciona depois da função
