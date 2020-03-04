// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar a manipular variáveis externas à função

// Contexto léxico em ação !

const x = 'Global' // Não sera exibida

function fora(){
    const x = 'Local' // Sim será exbida
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())