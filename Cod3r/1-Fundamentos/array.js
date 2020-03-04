const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // exibe com sucesso
console.log(valores[4]) // undefined

valores[4] = 10
console.log(valores) // exibe com sucesso todos
console.log(valores.length) // qtd de registrso

valores.push({id: 3}, false, null, 'teste') // para colocar novos elementos no arrya
// array é heterogeneros acaita diversos tipos
console.log(valores) 

console.log(valores.pop())  // eliminar último registro 
delete valores[0] // elimina indice apontado 
console.log(valores) 

console.log(typeof valores) // Arrya é tipo object

