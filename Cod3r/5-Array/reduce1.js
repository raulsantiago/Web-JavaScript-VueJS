const alunos = [
    { nome: 'Joao', note: 7.3, bolsistea: true },
    { nome: 'Maria', note: 9.2, bolsistea: false },
    { nome: 'Pedro', note: 9.8, bolsistea: true }
]

console.log(alunos.map(a => a.note))
const resultado = alunos.map(a => a.note).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

console.log(resultado)

// Todos os alunos são bolsistas ?
const todosBolsa = alunos.map(a => a.bolsistea).reduce(function(bolsistea, res){
    return bolsistea == true && res == true
})
console.log(todosBolsa)

// Algum aluno é bolsista ?
const algumBolsa = alunos.map(a => a.bolsistea).reduce(function(bolsistea, res){
    return bolsistea == true || res == true
})
console.log(algumBolsa)