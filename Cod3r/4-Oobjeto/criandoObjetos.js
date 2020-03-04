// let e const são variaveis no espoco da função
// this fica a variavel extena da função

// usando a notação literal
const obj1 = {}
console.log(obj1)

// object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesc = () => {
        return preco * (1-desc)
    }
}
const p1 = new Produto('Tablet', 1500.10, 0.10)
const p2 = new Produto('Note', 300.10, 0.20)

console.log(p1.getPrecoComDesc(), p2.getPrecoComDesc())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('Raul', 7980, 4)
const f2 = criarFuncionario('Luar', 1000.0, 15)
console.log(f1.getSalario(), f1.nome, f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)