function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({})) // Chamando objeto de 0 ate 1000
//console.log(rand()) // Undefined