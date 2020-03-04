// Convertando um objeto em JSON
// Obs: JSON é somente dados e não capta funções
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c}}
console.log(JSON.stringify(obj))

// Convertendo um JSON para objeto
// Importante é que um JSON os atributos tem que ser criado com "" aspas duplas
// Tambem "" aspas duplas para o conteudo das Strings
// Pode passar um objeto dentro de outro objeto e Arrays
console.log(JSON.parse('{ "a": 1, "b": "texto", "c": true, "d": {}, "e": [] }'))


