// conceito lexico da função
// A variavel valor sera exibida como Global, devido a chamada da minhaFuncao primeiro
// Mas nao sera exibida a Local
const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()