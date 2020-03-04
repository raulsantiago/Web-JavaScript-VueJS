const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(`Break`)
for (x in nums){
    if (x == 5){
        break // Funciona a paralização em for e não no if
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log(`Continue`)
for (y in nums){
    if(y == 5 ){
        continue // Funciona me for, ele quando executado imediatamente vai para for, não permitindo executar o cógigo abaixo
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log(`Break obedecendo o Rótulo`)
externo: for (a in nums){
    for (b in nums){
        //if(a == 2 && b == 3) break // Obdecerá o for interno
        if(a == 2 && b == 3) break externo // Obdecerá o for externo com rótulo
        console.log(`Par = ${a}, ${b}`)
    }
}