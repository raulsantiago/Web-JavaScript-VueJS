let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // tornar algo que não é boolean em VERDADEIRO
console.log(!isAtivo) // tornar algo que não é boolean em FALSO

console.log('os verdadeiros')
console.log(!!3)
console.log(!!-3)
console.log(!!"")
console.log(!!"texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 1))

console.log('os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = 0))

console.log('para finalizar')
console.log(!!('' || null || 0 || ' ')) // verdadeiro
console.log(!!('' || null || 0 )) // falso

let nome = ''
console.log(nome || 'Desconhecido')


nome = 'Raul'
console.log(nome || 'Desconhecido')