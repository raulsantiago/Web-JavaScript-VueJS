function soma(){
    let soma = 0
    for(i in arguments){ // arguments é um array interno da função
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'Teste')) // vai contatenar com diferença na precisão de number
console.log(soma('a', 'b', 'c')) // vai contatenar