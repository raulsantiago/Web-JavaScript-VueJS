// Com obejetos
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua C',
        numero: 100
    }
}

const {nome , idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // facilidade para intanciar um objeto com atributos parciais
console.log(n, i)

const { sobrenome, bem = true} = pessoa // undefined não tem no objeto
console.log(sobrenome, bem )

const { endereco : {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep ) // CEP undefined pois não tem no objeto

//const { conta : {ag, num}} = pessoa // Erro
//console.log(ag, num)