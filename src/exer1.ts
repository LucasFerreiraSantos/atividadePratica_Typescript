type Result = {
    averageF: number;
    situation: boolean
}

function average(num1: number, num2: number): Result {
    const averageFinal: number = (num1 + num2) / 2
        if(averageFinal >= 6){
            const objeto: Result = {
                averageF: averageFinal,
                situation: true
            }
            return objeto
        } else if(averageFinal < 6){
            const objeto: Result = {
                averageF: averageFinal,
                situation: false
            }
            return objeto
        }
}

console.log(average(6, 5))

// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.