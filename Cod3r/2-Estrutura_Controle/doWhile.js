function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`) // Para mesclar string com valiavel usar ` `
} while (opcao != -1) // A execução será realizada e depois verificado a condição

console.log('Até a próxima') 