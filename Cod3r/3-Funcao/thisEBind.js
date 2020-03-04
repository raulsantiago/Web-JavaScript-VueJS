// Importante: THIS pode variar dependendo de como for chamando, principalmente como global
// Uma forma de fixar o THIS dentro do escopo da função é através de arrow =>
// Pode fixar o THIS também atraves da fução bind

const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao) // poderia ser pessoa.saudacao
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre aradigmas: funcional e OO [ Resultado undefined ]

// Resolvendo o conflito supracitado
// Atraves do BIND ele reconhece THIS
const falarDePessoa = pessoa.falar.bind(pessoa) // forma de amarra o objeto a função
falarDePessoa()


// 1ª forma de fixar o this na função
console.log('1 forma this.idade')
function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa

// 2ª forma de fixar o this na função
console.log('2 forma this.idade')
function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa