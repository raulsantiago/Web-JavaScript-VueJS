// Todos são do tipo função
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('') // Revertendo uma string letra por letra
}

console.log('RAUL'.reverse())

Array.prototype.first = function(){
    return this[0] // Acessando o primeiro registro de umn Array
}
console.log([1, 2, 3, 4, 5].first())
console.log(["a", "b", "c", "d", "e"].first())

// Devido a utilização da função String global dará conflito no caso abaixo
String.prototype.toString = function(){
    return 'LASCOU TUDO'
}

console.log('RAUL'.reverse()) 