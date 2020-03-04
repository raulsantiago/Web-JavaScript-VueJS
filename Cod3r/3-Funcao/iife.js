// Função Autamene Invocada - Não conflita atributos com o global
// Respeita o espoco dentro da função - Foge do escopo global
// Padrão - IIFE - Immediately Invoked Function Expresion


// Tudo será executado em tempo de execução
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
    console.log(1 + 5)
})()