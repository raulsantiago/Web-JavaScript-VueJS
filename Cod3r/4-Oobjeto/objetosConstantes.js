// criando um obj normal
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro' // Alterando valor de atributo
console.log(pessoa)

// tentando criar novo ojb com mesmo nome
//pessoa = { nome: 'Ana' } // Não vai conseguir 

// Congelando um obj, ou seja, tornando constante
Object.freeze(pessoa) // Obj não poderá ser alterado, deletado nada pode ser feito

pessoa.nome = 'Maria' // não aceita
pessoa.end = 'Rua A' // não aceita
delete pessoa.nome // não aceita

console.log(pessoa.nome)
console.log(pessoa)

// Criando um obj constante diretamente
const pessoaConstante = Object.freeze({ nome: 'Raul'})
pessoaConstante.nome = 'Maria' // Não altera
console.log(pessoaConstante)
