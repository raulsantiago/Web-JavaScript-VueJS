// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3) 
imprimirSoma(2) // Retona NaN
imprimirSoma(2, 3, 4, 5)  // Ignora dos demais mais funciona
imprimirSoma() // Retona NaN

// Função com retorno
function soma(a, b = 2){
    return a + b
}
console.log(soma(3, 3))
console.log(soma(3))
console.log(soma()) // Retona NaN 

