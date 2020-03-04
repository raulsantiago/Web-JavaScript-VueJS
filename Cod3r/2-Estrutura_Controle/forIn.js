const notas = [6.7, 7.4, 9.8, 8.1, 7.1]

for(i in notas){
    console.log(i, notas[i])
}

console.log(i)// com acesso devido não ter declarado let antes do i

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

// Obs para não permitir o acesso ao atributo depois do for, definir let
for(let atributo in pessoa){ 
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

//console.log(atributo) // sem acesso devido declararção de let