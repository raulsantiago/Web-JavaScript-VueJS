const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13    
}

console.log(Object.keys(pessoa)) // Lista os titulos da tabela
console.log(Object.values(pessoa)) // Lista os registros da tabela 
console.log(Object.entries(pessoa)) // Lista os registros em formato de array

// Desestruturação de array
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

// Definir uma propriedade
Object.defineProperty(pessoa, 'dataNascimento', { 
    enumerable: true, // A propriedade dataNascimento vai ser listada true ou false ?
    writable: false,// A propriedade dataNascimento vai ser alterada true ou false ?
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' // não vai alterar devido 
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assing
const objDestino = { a: 1 } // Objeto recebedor
const obj1 = { b: 2 }
const obj2 = { c: 3, a: 4 } // Objeto que subescreveu a
const obj = Object.assign(objDestino, obj1, obj2)

Object.freeze(obj)
obj.c = 123456
console.log(obj)