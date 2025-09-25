// Declare três variáveis, nota1 , nota2 e nota3 , e atribua a elas valores
// numéricos que representem notas de um aluno. Calcule a média dessas três notas e
// armazene o resultado em uma variável media . Exiba a media no console.

let boletim = [
    nota1 = 10,
    nota2 = 8,
    nota3 = 6
]
console.log("----NOTAS----")
console.log(boletim)
console.log()

let qtd_notas = boletim.length

console.log(`O aluno possui um total de ${qtd_notas} notas`)
console.log()

let media = (nota1 + nota2 + nota3)/qtd_notas

console.log("----MÉDIA----")
console.log(`A média do aluno é: ${media}`)
console.log()