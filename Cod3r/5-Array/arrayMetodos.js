const pilotos = ['Vettel', 'Aloson', 'Raikkoen', 'Massa']

pilotos.pop() // Remove o último registro
pilotos.shift() // Remove o primeiro registro

pilotos.push('Verstappen') // Adiciona em última posição
pilotos.unshift('Raul') // Adiciona na primeira posição
console.log(pilotos)

// Splice pose adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // Adicionou no indice 2 e sem remoção (0)
console.log(pilotos)

pilotos.splice(3, 1) // Remove a partir no indice 3, quantidade de 1 diante podeno ser mais
console.log(pilotos)

// Cria um novo Arrya a partir de um indice (Pedaço)
const algunsPilotos1 = pilotos.slice(2) // A partir do indice 2 em diante
console.log(algunsPilotos1)

// Cria um novo Arrya a partir de um indice até outro indice (Pedaço)
const algunsPilotos2 = pilotos.slice(1, 3) // A partir do indice 1 até indice 2, exlcuindo indice 3
console.log(algunsPilotos2)

