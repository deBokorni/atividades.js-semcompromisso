// Crie um objeto perfil com as propriedades nome , seguidores (número)
// e seguindo (número). Atribua valores iniciais. Em seguida, aumente o número de
// seguidores em 100 e adicione uma nova propriedade bio (string) com uma breve
// descrição. Exiba o objeto perfil completo após as modificações.

let perfil = {
    nome: "Leandro",
    seguidores: 173,
    seguindo: 170
}

perfil.seguidores += 100
perfil.bio = "Me chamo Leandro e tenho 17 anos"

console.log(perfil)