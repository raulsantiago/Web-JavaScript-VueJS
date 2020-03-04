// Filter gera um novo Array
Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i=0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    { nome: 'Note', preco: 2499, fragil: true },
    { nome: 'iPad', preco: 4199, fragil: true },
    { nome: 'Copo Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo Plático', preco: 18.99, fragil: false }
]

const caro = produto => produto.preco >= 17
const fragil = produto => produto.fragil // por padrão é true
console.log(produtos.filter2(caro).filter2(fragil))