let listFruits: string[] = [];

function putFruit(fruit: string): void{
    listFruits.push(fruit)
}

function listingFruits(){
    console.log(listFruits)
}

function deleteFruits(list: string[], stringRemove: string): string[] {
    return list.filter(fruit => fruit === stringRemove);
}

putFruit("Banana")
putFruit("Manga")
putFruit("Morango")

const fruitsRemoves = deleteFruits(listFruits, "Banana");
console.log(fruitsRemoves)

console.log(listingFruits())

// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.