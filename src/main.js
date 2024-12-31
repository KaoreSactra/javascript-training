//? Nullish Coalescing Operator => ??
const age = 0
//* ||: 0 == Null !== ??: 0 == 0, In both: "", [], Null & Undefined == Null
document.body.innerText = 'Sua idade é: ' + (age || 'Indefinida') // ==> Sua idade é: Indefinida
document.body.innerText ='Sua idade é: ' + (age ?? 'Indefinida') // ==> Sua idade é: 0

//? Objetos
const user1 = {
    name: 'Gustavo',
    age: 20,
    address: {
        street: 'Rua dos pinheiros',
        number: 6
    }
}

const user2 = {
    name: 'Roberto',
    age: 23,
    address: {
        street: 'Rua dos ipês',
        number: 78
    }
}

document.body.innerText = ('name' in user1) // => True
document.body.innerText = (Object.keys(user1)) // ==> name,age,address
document.body.innerText = (Object.values(user1)) // ==> Gustavo,20,[object Object]
document.body.innerText = JSON.stringify(Object.values(user1)) // ==> ["Gustavo",20,{"street":"Rua dos bobos","number":6}]
document.body.innerText = JSON.stringify(Object.entries(user1)) // ==> [["name","Gustavo"],["age",20],["address",{"street":"Rua dos bobos","number":6}]]

//? Desestruturação
const { address, age:idade, nickname = 'Kaore' } = user1

document.body.innerText = JSON.stringify({ nickname, idade, address }) // ==> "Gustavo",20,{"street":"Rua dos bobos","number":6}]

function showUser({ name, age, address }) {
    return `O ${name}, tem ${age} anos e mora na ${address.street}.`
}

document.body.innerText = showUser(user1) // ==> O Gustavo, tem 20 anos e mora na Rua dos pinheiros.
document.body.innerText = showUser(user2) // ==> O Roberto, tem 23 anos e mora na Rua dos ipês.
//* Uso uma função para organizar valores

//? Rest Operator
const { name, ...rest1 } = user1

document.body.innerText = JSON.stringify(rest1) // ==> {"age":20,"address":{"street":"Rua dos pinheiros","number":6}}

const array2 = [1, 2, 3, 4, 5, 6]

const [ first, , third, ...rest2 ] = array2

document.body.innerText = JSON.stringify({ first, third, rest2 }) // ==> {"first":1,"third":3,"rest2":[4,5,6]}
//* pego o que sobrar dos objetos e arrays

//? Short Syntax
const name1 = 'Gustavo';
const age1 = 20;

const user3 = {
    name1, // ==> name1: name1
    age1, // ==> age1: name1
}

document.body.innerText = JSON.stringify(user3) // ==> {"name1":"Gustavo","age1":20}
//* Igualo a váriavel com oque ele vai receber automaticamente 

//? Optional Chaining
const user4 = {
    name: 'Gustavo',
    age: 20
}

const user5 = {
    name: 'Gustavo',
    age: 20,
    address: {
        street: 'Rua dos pinheiros',
        number: 6
    }
}

const user6 = {
    name: 'Gustavo',
    age: 20,
    address: {
        street: 'Rua dos pinheiros',
        number: 6,
        zip: {
            code: '07127-999',
            city: 'São Paulo'
        }
    }
}

document.body.innerText = user4.address?.zip?.code ?? 'Não informado' // ==> Não informado
document.body.innerText = user5.address?.zip?.code ?? 'Não informado' // ==> Não informado
document.body.innerText = user6.address?.zip?.code ?? 'Não informado' // ==> 07127-999
//* Vou tentar acessar o address se ele não existir não vou tentar acessar o resto.

//? Métodos de array
const array = [1, 2, 3, 4, 5, 6]

//* Map == Analisa o o array podendo modificar cada item, mas só pode criar arrays novos do mesmo tamanho.
array.forEach(item => { // Não pode modificar cada item
    document.body.innerText += item // ==> 123456
})

const newArray1 = array.map(item => { // Pode modificar cada item
    if (item % 2 === 0) { // oque for par retorna multiplicado por 10
        return item*10
    }

    return item // oque for impar volta normal
    })

document.body.innerText = newArray1 // ==> 3,6,9,12,15,18

//* Filter == Filtra o array
const newArray2 = array.filter(item => item % 2 === 0) // Pega apenas os números pares ==> 2,4,6

document.body.innerText = newArray2 // ==> 2,4,6

//* Map + Filter
const newArray = array
    .filter(item => item % 2 === 0)
    .map(item => item*10)

document.body.innerText = newArray // ==> 2,4,6

//* Every == Retorna booleano sobre todos os itens do array
const allItensAreNumbers = array.every(item => typeof item === 'number')
document.body.innerText = allItensAreNumbers // ==> true

//* Some == Retorna booleano sobre um dos itens do array
const oneItemIsString = array.some(item => typeof item === 'string')
document.body.innerText = oneItemIsString // ==> false

//* Find == Retorna o primeiro item que achar nas condições declaradas
const pairNumber = array.find(item => item % 2 === 0)

document.body.innerText = pairNumber // ==> 2

//* FindIndex == Retorna o primeiro item que achar nas condições declaradas
const oddNumber = array.findIndex(item => item % 2 !== 0) // posição onde o primeiro número impar está.

document.body.innerText = oddNumber // ==> 0

//* Reduce == Usado para pegar um array e criar uma estrutura de dados nova
const total = array.reduce(
    (acc, item) => {
        return acc + item
    },
    0 // Valor inicial da nova estrutura
)

document.body.innerText = total // ==> 21

//? Template Literals
const cake = 'strawberry'
const message = `Your favorite cake is ${cake ? cake : 'chocolate?'}`

document.body.innerText = message // ==> Your favorite cake is strawberry

//? Promises
const sum = (num1, num2) => { //* Função assíncrona
    return new Promise((result, error) => {
        setTimeout(() => {
            result(num1 + num2)
        }, 0); //* Tempo funcioando (setado em 0 para não atrapalhar o código)
    })
}

sum(3, 3)
    .then(soma => {
        document.body.innerText = soma // ==> 6
    })
    .catch(err => {
        document.body.innerText = 'Operação rejeitada:' // ==> Operação rejeitada
    })

//* Exemplo 1 == Pegar informações de usuários no github
fetch('https://api.github.com/users/KaoreSactra')
    .then(response => {
        return response.json()
    })
    .then(body => {
        console.log(body)
    })
    .catch(err => {
        console.log(err)
    })
    .finally(() => {
        document.body.innerText = 'Informação adquirida'
    })

//* Exemplo 2 == Pegar informações de usuários no github
async function searchGithubUsers(user) {
    try {
        const response = await fetch(`https://api.github.com/users/${user}`)
        const body = await response.json()

        console.log(body)
    } catch(err) {
        console.log(err)
    } finally {
        document.body.innerText = 'Informação adquirida'
    }
}

searchGithubUsers('KaoreSactra')