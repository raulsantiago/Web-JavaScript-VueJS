// Testando a criação de objetos 
// 1) Criando um objeto sem atributos
function MeuObjeto() {}
    console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // Ambos objetos são estritamente iguais sim
console.log(MeuObjeto.prototype === obj1.__proto__) // Objeto original é estritamemnte igual ao instancia sim

// 2) Criando um atributo e uma função ao objeto original
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nom é ${this.nome}!`)
}

// 3) Os objetos instanciados do mesmo objeto original, herdam suas alterações
obj1.falar()
obj2.falar()
obj2.nome = 'Raul'
obj2.falar()

// 4) Quando crio um objeto novo e faço receber outro objeto ee virá o outro.
const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

