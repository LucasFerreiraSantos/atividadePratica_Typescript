type Director = {
    name: string;
    age: number;
    commission: number;
    wage?: number | string;
}

function createUserDirector(Director: { name: string, age: number, commission: number, wage?: number | string }): Director {
    if(Director.wage === undefined) {
        Director.wage = "N/A"
    }

    const manager: Director = {
        name: Director.name,
        age: Director.age,
        commission: Director.commission,
        wage: Director.wage
    }

    return manager
}

const manager = createUserDirector({ name: "Wemerson", age: 50, commission: 5, wage: 7000 })
console.log(`O Diretor ${manager.name} tem ${manager.age} anos, comissão de nível ${manager.commission} e salário de ${manager.wage}`)

// 6. Usando o contexto do exercício 5, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”