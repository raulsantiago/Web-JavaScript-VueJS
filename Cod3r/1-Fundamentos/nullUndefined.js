let valor // não inicializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor)
//console.log(valor.toString()) //Erro!  nao pode gerar null para string

const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
delete produto.preco // Deletar algo no ojbeto
console.log(produto)
console.log(!!produto.preco)
console.log(!produto.preco)

produto.preco = null // sem preço
console.log(produto.preco)
console.log(!!produto.preco) // para utilizar boolean
console.log(!produto.preco) // para utilizar boolean