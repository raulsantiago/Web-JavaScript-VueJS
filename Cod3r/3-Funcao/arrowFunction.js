// Versão padrão
let dobroPadrao = function(a) {
    return 2 * a
}

// Versão arrow 1
dobroArrow1 = (a) => {
    return 2 * a
}

// Versão arrow 2 a mais resumida
dobroArrow2 = a => 2 * a // return está implicito

console.log(dobroArrow2(Math.PI))

// Outro exemplo
ola1 = () => 'Ola 1'
ola2 = _ => 'Ola 2' // possui um param _

console.log(ola1())
console.log(ola2())


// Outro exemplo
function Pessoa(){
    this.idade = 0

    setInterval(() => { // Aqui está a função arrow
        this.idade++
        console.log(this.idade)
    }, 2000)
}

new Pessoa

// Outro exemplo
let comparaComThis = function(param){ // Sem arrow
    console.log(this === param) // Cuidado com THIS que neste caso alterou sua condição global
}

comparaComThis(global) // true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)// false
comparaComThis(obj)// true

let comparaComThisArrow = param => console.log(this === param) // Com arrow
comparaComThisArrow(global)// false

//A função arrow é mais forte do que BIND
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false