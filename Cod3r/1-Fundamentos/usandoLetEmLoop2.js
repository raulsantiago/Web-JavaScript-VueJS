const funcs = []

for (let i = 0; i <10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() // Será impresso 2 let tem memoria
funcs[8]() // Será impresso 8 let tem memoria