// Crie um array chamado listaDeCompras com pelo menos 4 itens (strings).
// Usando um loop for , percorra o array e exiba cada item no console, um por linha.


let listaDeCompras = ["queijo", "presunto", "maionese", "camarão"]

for (produto in listaDeCompras){
    cont = (parseInt(produto) + 1)
    console.log(`Produto ${cont}: ${listaDeCompras[produto]}`)
}