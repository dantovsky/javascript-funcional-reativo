// imperativo

// const notas = [8.7, 6.8, 7.7, 9., 5.3, 8.0]

// function media(notas) {
//     let total = 0
//     for (let i = 0; i < notas.length; i++) {
//         total += notas[i]
//     }

//     return total / notas.length
// }

// const mediaTurma = media(notas)
// console.log(`Média é ${mediaTurma}`)

// declarativo
const notas = [8.7, 6.8, 7.7, 9., 5.3, 8.0]

const somar = (a, b) => a + b
const dividir = (a, b) => a / b

const mediaTurma = dividir(
    notas.reduce(somar),
    notas.length
)
console.log(`Média é ${mediaTurma}`)


// aula 4

const alunos = [
    {nome: 'Ana', nota: 9.5},
    {nome: 'Bia', nota: 7.3},
    {nome: 'Gil', nota: 5.8},
    {nome: 'Leo', nota: 7.6},
    {nome: 'Gui', nota: 9.1},
    {nome: 'Lia', nota: 4.9},
    {nome: 'Rui', nota: 7.0}
]

// Gerar uma nova lista usando uma **versão procedural** imperativa.

const aprovados = []

for (let i = 0; i < alunos.length; i++) {
    if(alunos[i].nota >= 7) {
        aprovados.push(alunos[i])
    }
}

console.log(aprovados)

// Gerar uma nova lista usando uma **versão funcional** declarativa.

const estaAprovado = aluno => aluno.nota >= 7 // returns boolean

const aprovados = alunos.filter(estaAprovado) // o filter irá trazer os itens "true"

console.log(aprovados)
