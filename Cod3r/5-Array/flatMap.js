const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 8.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Raul',
        nota: 8.9
    }, {
        nome: 'Renata',
        nota: 7.3
    }]    
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const nota1 = escola.map(getNotasDaTurma)
console.log(nota1)

console.log([].concat([ 8.1, 8.3 ], [ 8.9, 7.3 ]))


// Como funciona a situação supracitada
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)