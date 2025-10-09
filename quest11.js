//Crie uma função chamada converterCelsiusParaFahrenheit que receba uma temperatura em Celsius como parâmetro e retorne o valor equivalente em Fahrenheit. A fórmula de conversão é: 
// Fahrenheit = Celsius * 9/5 + 32 . Teste afunção com alguns valores e exiba os resultados no console.

let grausC = 0

function converterCelsiusParaFahrenheit(gc){
    let grausF = (gc*9/5+32)
    return grausF
}

console.log(`${grausC}°C em Graus Fahrenheit são ${converterCelsiusParaFahrenheit(grausC)}°F`)