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

// spread (espalhar) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos.

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
console.log(...data)