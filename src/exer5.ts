type User = {
    name: string;
    age: number;
    occupation: string;
    wage?: number | string;
}

function createUser(User: { name: string, age: number, occupation: string, wage?: number | string }): User {
    if(User.wage === undefined) {
        User.wage = "N/A"
    }

    const employee: User = {
        name: User.name,
        age: User.age,
        occupation: User.occupation,
        wage: User.wage
    }

    return employee
}

const user = createUser({name: "Lucas", age: 25, occupation: "Logística" })
console.log(`O Funcionário ${user.name} tem ${user.age} anos, trabalha com ${user.occupation} e possui um salário de ${user.wage}`)

// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”