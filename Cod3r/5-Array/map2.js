const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Carderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

console.log(carrinho) // Json
console.log(typeof carrinho) // Typo Json

// Retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)