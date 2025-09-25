// Crie um objeto chamado livro com as seguintes propriedades: titulo
// (string), autor (string) e anoPublicacao (número). Atribua valores a essas
// propriedades. Em seguida, exiba no console uma frase que combine o título e o autor
// do livro.


let livro = {
    titulo: "A Culpa é Das Estrelas",
    autor: "John Green",
    genero: "Romance",
    anoPublicacao: 2014
};

console.log(`${livro.titulo} é um livro de ${livro.genero}, publicando em ${livro.anoPublicacao} e escrito por ${livro.autor}.`)