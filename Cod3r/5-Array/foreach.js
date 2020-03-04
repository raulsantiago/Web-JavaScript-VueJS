// Foreach tem por padrão os parametro segundo=indice terceiro=array
const aprovados = ['Agata', 'Aldo', 'Daniel', 'Raquel']

// 1 Forma 
aprovados.forEach(function(nome, indice, array){
    console.log(`${indice+1}) ${nome}`)
    console.log(array)
})

// 2 Forma 
aprovados.forEach(nome => console.log(nome))

// 3 Forma 
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)