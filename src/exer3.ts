type Portfolio = {
    balance: number;
    transactions: number;
    input: number;
    output?: number
}

function throwInputOutput(Portfolio: {balance: number, transactions?: number, input?: number, output?: number}){
    if(Portfolio.balance < Portfolio.output){
        console.log("Seu saldo é insuficiente.")
    }else{
        Portfolio.balance -= Portfolio.output
        Portfolio.transactions++
    }

    Portfolio.balance += Portfolio.input
    Portfolio.transactions++
    return Portfolio
}

console.log(throwInputOutput({balance: 2000, input: 100, transactions: 0, output: 1500}))

// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.