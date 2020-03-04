// Factoty Method - Criar diversos objetos diferentes sem repetir o código

// Criando um objeto com função
function criarProduto(nome, valor) {
    return{
        nome,
        valor,
        desconto: 0.1 // Valor padrão
    }
}

// Criando qualquer tipo de produto personalizado
console.log(criarProduto('CPU', 18.99))
console.log(criarProduto('Note', 155.18))



// Criando um objeto com classe
console.log()
console.log(`Criando um objeto com classe`)
class Pessoa{  // Esta opção é ruim no brownser devido ao this global so pode um chamada
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Raul')
p1.falar()

// Melhor opção é através de função arrow
const CriarPess = nome => {
    return{
        falar: () =>  console.log(`Meu nome é ${nome}`)
    }
}
const p2 = CriarPess('Joao')
p2.falar()

