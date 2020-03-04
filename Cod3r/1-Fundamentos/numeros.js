const peso1 = 1.0 // considera valor inteiro
console.log(peso1)
console.log(Number.isSafeInteger(peso1)) // retonar true se inteiro

const peso3 = 1.1 // não considera valor inteiro
const peso2 = Number('2.0')// considera valor inteiro

console.log(peso2, peso3)
console.log(Number.isSafeInteger(peso2))
console.log(Number.isSafeInteger(peso3))

const peso4 = Number('2.1')// nao considera valor inteiro
console.log(peso4)
console.log(Number.isSafeInteger(peso4))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2)) // passando uma string para valor binário
console.log(typeof media)
console.log(typeof Number) // Uma função
