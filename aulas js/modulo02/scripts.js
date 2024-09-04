/*  OBJETO:
    - Uma coleção de dados e/ou funcionalidades
    - Podem ter propriedades e métodos          */
//---------------------------------------------------------------------
/*
// Criar um  objeto vazio.
const obj = {}
    console.log(obj)

// Cria um objeto com propriedades e métodos.
const user = {
    email: "obli@email.com",  // chave : "valor",
    age: 12,
    // estrutura de objeto aninhada
    name: {
        first_name: "Obli",
        surname: "Terate",
    },
    address:{
        street: "Rua X",
        number: 12,
        city: "cidadela",
        postal_code: "12345-000",
    },
    message: () =>{
        console.log("olá mundo")
    },
}

// Acessando propriedades e métodos usando a notação de ponto.
console.log(user.email)
// Acessando propriedades de objetos
console.log(user.name.surname)
// Executa o método do objeto
user.message()

// Notação de colchetes
console.log(user["email"])
console.log(user["name"]["first_name"])
user["message"]()
*/

/*
const user = {
    name: "obli",
    message: function (){
        console.log(`Olá ${this.name}`)// pra arrow function anonima n funciona, então usar o "user.name"
    }
}

user.message()
*/

//-------------------------------------------------------------------
/*
const product = {
    name: "Teclado",
    quantity: 100,
}
// Atualizar o valor de uma propriedade
console.log(product.quantity)
product.quantity = 90
console.log(product.quantity)

console.log(product.name)
product.name = "mouse"
console.log(product.name)

// Notação de colchetes
product["quantity"] = 50
console.log(product)
*/

//------------------------------------------------------------------

/* OPTIONAL CHAINING (?.) - Encadeamento opcional
Se a propriedade ou função chamada é nullish (null or undefined), a expressão retorna undefined em vez de gerar um erro.

Útil ao explorar o conteúdi de um objeto quando não existe garantia da existencia de determinadas propriedades obrigatórias     */

// const user = {
//     id: 1,
//     name: "Obli",
//     /*
//     address: {
//         street: "Rua O",
//         city: "Cidadela",
//         geo:{
//             latitude: 47.8080,
//             longitude: 50.7777,
//         },
//     },
//     */
//     message: function(){
//         console.log(`Olá, ${this.name}!`)
//     },
    
// }

// console.log(user?.address?.street)

// user.message?.()

//------------------------------------------------------------------

/*  OPERADOR DE COALESCÊNCIA NULA (??)
    Operador lógico que retorna o seu operando do lado direito quando o seu do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.       */

//let content = null
/*
let content = "Thai"
console.log(content ?? "Conteúdo padrão") 

const user = {
    name: "Obli",
    avatar: undefined,
}

console.log(user.avatar ?? "default.png")
*/

//------------------------------------------------------------------
/*
// Função construtora
function createProduct(name){
    const product = {}

    product.name = name
    product.details = function() {
        console.log(`O nome do produto é ${this.name}`)
    }

    return product
}
// O new cria um novo objeto utilizando a mesma estrutura da função construtora.
const product1 = new createProduct("Teclado")
console.log(product1.name)
product1.details()

const product2 = new createProduct("Mouse")
console.log(product2.name)
product2.details()

// console.log(product1 === product2)

// Exemplos de funções construtoras disponiveis no próprio js
let myName = new String("obli")
console.log(myName)

let price = "40.6".replace(".", "")
console.log(price)

let date = new Date("2024-1-1")
console.log(date)

// Outra forma de criar
function Person(name){
    this.name = name
    this.message = function(){
        console.log(`Olá, ${this.name}`)
    }
}

const person1 = new Person("Obliterate")
console.log(person1.name)
person1.message()

const person2 = new Person("Thai")
console.log(person2.name)
person2.message()
*/
//------------------------------------------------------------------
// Método de texto
/*
let message = "Estou estudando os fundamentos de JS"

// Exibir o texto em maiúsculo.
console.log(message.toUpperCase())
// Exibir o texto em minusculo.
console.log(message.toLowerCase())

// Exibir o comprimento de uma string, incluindo espaços
console.log(message.length)
// Exemplo
let password = "12345"
if(password.length < 6){
    console.log("A senha deve ter ao menos 6 caracteres")
}

// Quantos digitos tem um número
let value = 12345
console.log(String(value).length)
console.log(value.toString().length)  //outro método

// Substituir parte de um texto
console.log(message.replace("JS","Javascript"))
// Extraindo uma parte da string (start, end)
console.log(message.slice(6, 30))
// Extraindo de tras para frente.
console.log(message.slice(-17))

// Removendo espaços do inicio e do final do texto
let textWithSpace = "          Texto de exemplo         "
console.log(textWithSpace.length)
console.log(textWithSpace)

console.log(textWithSpace.trim().length)
console.log(textWithSpace.trim())
*/

//------------------------------------------------------------------
/*
const creditCard = "1111222233331234"
console.log(creditCard.length)
// Pegar os 4 ultimos digitos
const lastDigits = creditCard.slice(-4)
console.log(lastDigits)
// O padStart prenche a string do inicio
const maskedNumer = lastDigits.padStart(creditCard.length, "X")
console.log(maskedNumer)
// O padEnd preenche a string do final
const number= "123"
console.log(number.padEnd(10, "#"))
*/
//------------------------------------------------------------------
/*
let text = "Estudar, Aprender, Praticar"
// Separar a string
let separate = text.split(",")
console.log(separate)

let message = "Estou aprendendo Javascript"
console.log(message.split(" "))

// Unir a string
let joined = separate.join(" - ")
console.log(joined)
*/
//------------------------------------------------------------------
/*
let message = "Estou estudando os fundamentos de Javascript"
// Obtem a posição da palavra
console.log(message.indexOf("estudando"))
// Quando não encontra retorna -1

// Verificar se existe a palavra ou frase na String.
console.log(message.toLowerCase().includes("javascript"))
// podemos combinar com lower ou upperCase pra não ocorrer erros 
*/

//------------------------------------------------------------------
// Array