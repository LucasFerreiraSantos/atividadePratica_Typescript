type gradesWeights = [
    {
        nota: number;
        peso: number
    },
    {
        nota: number;
        peso: number
    },
    {
        nota: number;
        peso: number
    }
]

const list: gradesWeights = [
    {
        nota: 10,
        peso: 3
    },
    {
        nota: 8,
        peso: 5
    },
    {
        nota: 9,
        peso: 2
    }
]

function averageWeights(list: gradesWeights){
    const finalGrade: number = (list[0].nota * list[0].peso) + (list[1].nota * list[1].peso) + (list[2].nota * list[2].peso) / 3
    return finalGrade
}

console.log(`A média final baseada no peso é: `,averageWeights(list))

// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado