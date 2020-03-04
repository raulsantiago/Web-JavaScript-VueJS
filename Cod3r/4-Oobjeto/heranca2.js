// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' //Este tipo de instancia deve ser evitada

const avo = { attr1: 'A' }
const pai = {__proto__: avo, attr2: 'B', attr3: '3' }
const filho = {__proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
console.log(pai.attr0, pai.attr1, pai.attr2, pai.attr3)
console.log(avo.attr0, avo.attr1, avo.attr2, avo.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())