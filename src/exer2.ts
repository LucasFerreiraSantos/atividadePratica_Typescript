type gradesWeights = [
    { note: number, weight: number },
    { note: number, weight: number },
    { note: number, weight: number }
]

let listGradesWeight: gradesWeights = [
    { note: 10, weight: 3 },
    { note: 8, weight: 5 },
    { note: 9, weight: 2 }
]

function averageWeights(listGradesWeight): number {
    let dividend: number = 0
    let divisor: number = 0

    listGradesWeight.forEach((value: gradesWeights, index: number): void => {
        dividend += value[index].note * value[index].weight
        divisor++
    })

    return dividend / divisor
}

console.log(averageWeights(listGradesWeight))

// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado