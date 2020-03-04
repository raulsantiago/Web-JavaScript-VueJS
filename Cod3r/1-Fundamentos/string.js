const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // retorna unicode
console.log(escola.indexOf('3')) // retorna indice 3
console.log(escola.substring(1)) // retorna a partir do indice 1 em diante
console.log(escola.substring(0, 3)) // retorna a partir do indice 0 ate 2 

console.log("Escola".concat(escola).concat(" ").concat("!")) // concatenar
console.log("Escola" + escola + " " + "!") // concatenar
console.log(escola.replace(/\d/, 'e')) // substituir todos os digitos por e (regex)
console.log(escola.replace(/\w/g, 'e')) // substituir todos as letras e digitos por e (regex)

console.log("Ana,Maria,Pedro".split(',')) 
console.log("Ana,Maria,Pedro".split(/,/)) // pode usar regex dentro do split
console.log("Ana,Maria,Pedro".split(/./)) // pode usar regex dentro do split

console.log("3" + 2) // não vai somar e sim contatenar