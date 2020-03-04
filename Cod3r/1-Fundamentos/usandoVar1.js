{{{{ var sera = 'Será???'}}}}
console.log(sera) //Não sendo uma função, mesmo fora do bloco/escopo é visível

function teste(){
    var local = 123
    console.log(local) // Vai exibir
}
teste()
console.log(local) // Não vai exibir fora da função
