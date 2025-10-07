// Dada uma variável nota (número inteiro de 0 a 100), use switch case para classificar a nota em conceitos: "A" (90-100), "B" (80-89), "C" (70-79), "D" (60-69) e "F" (abaixo de 60). Exiba o conceito no console. (Dica: você pode agrupar case s ou usar if/else dentro de case s para ranges, mas tente pensar em como o switch pode ser usado de forma mais direta para ranges, talvez com uma pequena adaptação na variável de controle).

let nota = 98
let letraNota = "a"

switch(nota){
    case nota >=90 && nota <= 100:
        letraNota = `A`;
        break;

    case nota>=80 && nota<=89:
        letraNota = `B`;
        break; 

    case nota>=70 && nota<=79:
        letraNota = "C";
        break;

    case nota>=60 && nota<=79:
        letraNota = `D`;
        break;

    case nota<60:
        letraNota = `F`;
        break;
    

}

console.log(letraNota)