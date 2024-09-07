// strict mode (modo estrito) => ativando esse modo, os erros que eram silenciosos passam a gerar exceções no JS.

/*
"use strict"
function showMessage(){
    persoName = "Obli"

    console.log(`Ola ${persoName}`)
}
showMessage()

class Student {
    get point(){
        return 7 
    }
}

let student = new Student()
// Tenta mudar uma propriedade somente leitura
//student.point = 10

// Tentando deletar uma propriedade de um objeto que não posso deletar
//delete.window.document

// Quando passamos parâmetros duplicados
function sum(a, a, c){
    return a+a+c
}
*/
//---------------------------------------------------------------
/*
//Destructuring assignment (desestrutração) permite extrair dados de arrays ou objetos em variaveis distintas.

const data = ["obli", "oblimail@mail.com"]

//  Desestruturando array
const [username,email] = data
console.log("nome:", username)
console.log("email:", email)

const fruits = ["Banana", "Apple", "Orange"]

//Desestruturar somente o primeiro
const[banana] = fruits
console.log(banana)

// Ignorando a primeira na desestruturação.
const[, apple] = fruits
console.log(apple)
*/

// Objetos
/*
const product = {
    description: "Teclado",
    price: 100
}

const{ description, price} = product
console.log("Descrição:", description)
console.log("Preço: R$", price)

function newProduct(description, price){
    console.log("Descrição:", description)
    console.log("Preço: R$", price)
}

newProduct("Mouse", 70)
*/
//---------------------------------------------------------------
/*
//Rest params(...) permite representar um número indefinido de argumento como um array

function values(...rest){
    // Mostra a quantidade de parametros
    console.log(rest.length)

    // Exibindo o conteudo do array
    console.log(...rest)

    // Exibe o conteudo do rest que é um array
    console.log(rest)
}

values(2, 1, 3, 4)
*/
//---------------------------------------------------------------
/*
// spread (espalhar) => permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos.

const numbers = [1, 2, 3]
console.log(numbers)

// Spread
console.log(...numbers)

const data = [
    {
        name:"Obli",
        email:"obli@email.com",
        avatar:"o.png",
    },
    {
        name:"Thai",
        email:"thai@email.com",
        avatar:"t.png",
    },
]
console.log(data)

// Utilizando o spread no array com objetos
console.log(...data)
*/
//---------------------------------------------------------------
//---------------------------------------------------------------

//            METODOS DE ARRAY
/*
//Método map() => chama a função callback recebida por parâmetro para cada elemento do array originla em ordem e constrói um novo array com base nos retornos de cada chamada. E no final, devolve o novo array

const products = ['Teclado', "Mouse", "Monitos"]

// Percorre os itens do Array  (quando vai fazer alguma lógica)
products.map((item) => {
 console.log(item)
})

// Sintaxa reduzida.  (apenas fazer retorno)
products.map((product) => console.log(product))

// Utilizando o novo objeto retornado
const formatted = products.map((product) => {
    // return product.toUpperCase()

    return{
        id: Math.random(),
        description: product,
    }
})

console.log(formatted)
*/
//---------------------------------------------------------------
/*
// Método filter() => cria um novo array com todos os elementos que passaram na condição.

const words = ["Javascript","HTML", "CSS", "Web"]

// Filtrando palavras que trnahm mais de 3 letras.
const result = words.filter((word) => word.length > 3)
console.log(result)

const products = [
    { description: "Teclado", price: 150, promotion: true},
    { description: "Mouse", price: 70, promotion: false},
    { description: "Monitor", price: 900, promotion: true},
]

// Exemplo de um filtro de produtos na promoção.
const promotion = products.filter((product) => product.promotion === true)

console.log(promotion)
*/
//---------------------------------------------------------------

// Método findIndex() => retorna o indice no array do primeiro elemento que satisfazer a condição. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.