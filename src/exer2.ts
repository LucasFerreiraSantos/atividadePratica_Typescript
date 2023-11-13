type gradesWeights = [
    { note: number, weight: number },
    { note: number, weight: number },
    { note: number, weight: number }
]

const list: gradesWeights = [
    { note: 10, weight: 3 },
    { note: 8, weight: 5 },
    { note: 9, weight: 2 }
]

function averageWeights(list: gradesWeights): number {
    return (list[0].note * list[0].weight) + (list[1].note * list[1].weight) + (list[2].note * list[2].weight) / 3
}

console.log(`A média final baseada no peso é: `,averageWeights(list))

// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado