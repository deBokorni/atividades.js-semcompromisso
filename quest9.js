// Crie duas variáveis: usuarioLogado (booleano) e isAdmin (booleano). Usando operadores lógicos, verifique se o usuário está logado OU é um administrador. Exiba uma mensagem no console informando se o usuário tem acesso total ao sistema. 


let usuarioLogado = true
let isAdmin = false

function logadoOuAdm(log, adm){
    let user = null

    if (log === true && adm === true){
        user = `O usuário está logado e é um administrador.`
    }
    else if (adm === true && log === false){
        user = `O usuário é um administrador.`
    }
    else if (log === true && adm === false){
        user = `O usuário está logado.`
    }
    else {
        user = `O usuário não está logado e não é um administrador.`
    }
    return user
}

console.log(logadoOuAdm(usuarioLogado, isAdmin))