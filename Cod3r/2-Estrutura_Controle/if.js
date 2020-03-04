// IF
console.log('Exemplo IF')
function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('Aprovado com ' + nota )
    }    
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor){
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()// false
seForVerdadeEuFalo(null)// false
seForVerdadeEuFalo(undefined)// false
seForVerdadeEuFalo(NaN)// false
seForVerdadeEuFalo('')// false
seForVerdadeEuFalo(0) // false
seForVerdadeEuFalo(-1) // true
seForVerdadeEuFalo('?')// true
seForVerdadeEuFalo([])// true
seForVerdadeEuFalo([1, 2])// true
seForVerdadeEuFalo({})// true


function teste1(num) {
    if(num > 7)
        console.log(num) // Pertence ao escopo do IF
        console.log('Final')// Não pertence ao escopo do IF será sempre executado
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {  // Cuidado com ' ; ' nas estruturas. Somente executa a condição até o ' ; '
        console.log(num) 
    }        
}

teste2(6)
teste2(8)


// IF e ELSE
console.log('Exemplo IF e ELSE')
const imprimirResultado = function (nota) {
    if(nota > 7){
        console.log('Aprovado') // Pertence ao escopo do IF
    } else {
        console.log('Reprovado') // Pertence ao escopo do IF
    }    
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa') // Cuidado vai returnar como false e exibirá Reprovado

// IF e ELSE IF
console.log('Exemplo IF e ELSE IF')
Number.prototype.entre = function (incio, fim) {
    return this >= incio && this <= fim
}

const imprimirResultado2 = function (not) {
    if (not.entre(9, 10)){
        console.log('Quadro de Honra')
    } else if (not.entre(7, 8.99)){
        console.log('Aprovado')
    } else if (not.entre(4, 6.99)){
        console.log('Recuperação')
    } else if (not.entre(0, 3.99)){
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')   
    }       
}    

imprimirResultado2(10)
imprimirResultado2(8.9)
imprimirResultado2(6.9)
imprimirResultado2(3.9)
imprimirResultado2(-1)
imprimirResultado2(11)
