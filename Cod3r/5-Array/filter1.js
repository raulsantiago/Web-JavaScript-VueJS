// Retorna true ou false com o resultado filtrado
const produtos = [
    { nome: 'Note', preco: 2499, fragil: true },
    { nome: 'iPad', preco: 4199, fragil: true },
    { nome: 'Copo Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo Plático', preco: 18.99, fragil: false }
]

// Usando o filter
console.log(produtos.filter(function(p){
    return false // Array vem vazio
}))

console.log(produtos.filter(function(p){
    return true // Array vem completo
}))

console.log(produtos.filter(function(p){
    return p.preco > 2000 // Array vem com a consição
}))

console.log(produtos.filter(function(p){
    return p.preco > 18 && p.fragil == false // Array vem com a consição
}))
// Outra forma
const caro = produto => produto.preco >= 17
const fragil = produto => produto.fragil // por padrão é true
console.log(produtos.filter(caro).filter(fragil))