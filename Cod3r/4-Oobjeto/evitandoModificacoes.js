// Object.preventExpresions
// Não permite criar novos atributos ao objeto, mas pode excluir
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensível:', Object.isExtensible(produto)) // Testando se o objeto é extenvível ?

produto.nome = 'Borracha' // Sim será alterado
produto.descricao = "Borracha escolar" // Não será criado
delete produto.tag // Sim atributo será excluido
console.log(produto)

//Object.seal
// Selado - Não consegue criar e nem exluir novos atributos ao objeto
const pessoa = { nome: 'Raul', idade: 40 }
Object.seal(pessoa) // objeto selado
console.log('Selado:', Object.isSealed(pessoa)) // Confirnado se esta selado

pessoa.sobrenome = 'Santiago' // Não será criado novo atributo
delete pessoa.nome // Não será deletado o atributo nome
pessoa.idade = 29 // Sim pserá alterado o conteudo do atributo já existente
console.log(pessoa)

// Object.freeze = selado + valores constantes