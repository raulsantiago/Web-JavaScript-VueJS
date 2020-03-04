const funcs = []

for (var i = 0; i <10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()// Será impresso 10
funcs[8]()// Será impresso 10