function tratarErroLancar(erro){
    throw new Error('Texto do erro')
    //throw 10
    //throw true
    //throw 'Texto do erro'
    /*
    throw{
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
    */
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroLancar(e)
    } finally{
        console.log('final')
    }
}

const obj = { nome: 'Raul'}
imprimirNomeGritado(obj)