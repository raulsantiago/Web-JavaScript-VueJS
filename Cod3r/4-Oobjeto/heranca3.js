const pai = { nome: 'Luar', corCabelo: 'castanho'}

const filha1 = Object.create(pai)
filha1.nome = 'Paula'
console.log(filha1.corCabelo) // castanho

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true} // Nome não pode ser alterado e pode sim ser listado
})

console.log(filha2.nome) // Bia
filha2.nome = 'Carla' // Não será alterado
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// Se key da filha2 tem seu próprio atributo lista, senão lista os da herança
// Como neste caso tem as duas situações então será exibido ambos
for(let key in filha2){
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}

