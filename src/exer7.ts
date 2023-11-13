import { User } from "./exer5";
import { Director } from "./exer6";

type Worker = User | Director;

let listWorkers: object[] = [];

function createListType(Worker: {
  name: string;
  age: number;
  occupation?: string;
  commission?: number;
  wage?: number | string;
}): Worker {
  if (Worker.wage === undefined) {
    Worker.wage = "N/A";
  }

  const worker: Worker = {
    name: Worker.name,
    age: Worker.age,
    occupation: Worker.occupation,
    commission: Worker.commission,
    wage: Worker.wage,
  };

  if (Worker.commission === undefined) {
    console.log(" a. O mesmo que o exercício 5, em caso de objeto User.");
    listWorkers.push(worker);
  } else if (Worker.occupation === undefined) {
    console.log("b. O mesmo que o exercício 6, em caso de objeto Diretor.");
    listWorkers.push(worker);
  } else {
    console.log("Os tipos se misturam.");
  }

  return worker;
}

const worker = createListType({
  name: "Lucas",
  age: 40,
  commission: 3,
  wage: 7000,
});

console.log(worker);
console.log(listWorkers);

// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.
