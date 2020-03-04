// Chamamento de volta - Chamando uma função dentro de outra função ocorrendo retorno
// Utiliza o padrão observer - Onde um evento dentro de uma função ocorre e retorna

const fabricantes = ['Merdeces','Audi','BMW']

function imprimir(nome, indice){
    console.log(`${indice}. ${nome}`)
}

fabricantes.forEach(imprimir) // forEach é uma função e chamento a função imprimir que gera um retorno

fabricantes.forEach(fabricantes => console.log(fabricantes))

// Callback 2 comparando 
const notas = [6.5, 5.2, 3.6]

// Sem callback
const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
    notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(notas => notas < 7) // filter é uma callback
console.log(notasBaixas2)

// Mais elegante
const notasMenor7 = nota => nota < 7 // usa uma linha a mais. porem reaproveita o codigo
const notasBaixas3 = notas.filter(notasMenor7)
console.log(notasBaixas3)

