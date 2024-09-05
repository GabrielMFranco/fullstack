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

/* Array => colecão ordenada de valores 
fruits = [maça, banana, uva] => [indice 0], [indice 1], [indice 2]  */

/*
// Criando Array com construtor.
const newArray = new Array()
console.log(newArray)
// Retorna o tamanho do Array
console.log(newArray.length)

// [] => array
// {} => objeto

// Cria um array com construtor
const available = new Array(10)
console.log(available)
console.log(available.length)
*/
//------------------------------------------------------------------
/*
// Cria o array
let fruits = ['apple', 'banana', 'orange', 'watermelon']
console.log(fruits)
// Quantidade de itens do array
console.log(fruits.length)
// Acessa o item pelo indice.
console.log(fruits[1])
// Acessar um indice que não tem, retorna undefined
console.log(fruits[7])
// Acessando a ultima possição
console.log(fruits[fruits.lenght -1])
*/
//------------------------------------------------------------------
/*
//convertendo string em array
let fullName = "Obli terate oproprio"
console.log(fullName)
// Cria um array com os nomes separados pelo espaço
console.log(fullName.split(" "))

// Cria um array com as letras.
console.log(Array.from(fullName))
*/
//------------------------------------------------------------------
/*
// Adicionar e remover array
let users = []
// Adiciona um item ao final do array
users.push("Obli")
users.push("Thai")
users.push("Chili")
users.unshift("Masker") // Adiciona no inicio do array
console.log(users)

// Remover item do inicio do array.
users.shift()
console.log(users)
// Remove do fim do array
users.pop()
console.log(users)
*/
//------------------------------------------------------------------
/*
let fruits = ["apple", "orange", "strawbery", "lemon"]
// Encontra e retorna o indice do elemento
let position = fruits.indexOf("lemon")
console.log(position)


//fruits.splice(1, 3) // start, end
// Remove um item pela posição do indice, (o 1 é o número de itens para remover)
fruits.splice(position,1)
console.log(fruits)
*/
//------------------------------------------------------------------
/*
let myArray = [
    "Um texto",
    10,
    true,
    function(){
        console.log("Função dentro do array")
    },
    {
        name: "Obli",
        email: "objeto@no.array",
    },
]

// Texto
console.log(myArray[0])

// Numero
console.log(myArray[1])

// Boleano
console.log(myArray[2])

// Função
myArray[3]()

// Objeto
console.log(myArray[4].name, myArray[4].email)
*/

//------------------------------------------------------------------
/*
// Verifica se o item existe no array
let fruits = ["apple", "orange", "strawbery", "lemon"]

console.log(fruits.includes("apple"))
console.log(fruits.includes("banana"))

const array = [1, 2, 3, 4, 5];
array.splice(2, 1, 'x', 'y', 'z');
console.log(array)
*/

//------------------------------------------------------------------
//      REPETIÇÕES
/*
// WHILE: Executa até que a condição seja verdadeira.
let execute = true
while(execute){
    let response = window.prompt("Deseja continuar?: 1(sim) ou 2(Não)")

    if(response === "2"){
        execute = false
    }
}

console.log("fim")
*/
/*
// Loop infinito
let value = true
while(value === true){
    console.log("executando o while...")
}
*/
/*
// DO WHILE: Repete pelo menos uma vez, primeiro executa e depois confere a condição.
let value = 0

do {
    value++
    console.log(value)
}while(value < 10)

console.log("fim")
*/

/* FOR repete até que a condição seja falsa
    - variavel de controle
    - condição
    - incremento ou decremento da variavel de controle     */

/*
for(step = 0; step < 10; step++){
    console.log(step)
}
// Exemplo de tabuada
    let number = 8
    for(step = 0; step <= 10; step++){
        console.log(`${number} X ${step} = ${number * step}`)
    }
*/


//  for...in => Executa iterações a partir de um objeto e percorre as propriedades.
/*
let person = {
    name: "Obli",
    surname:"terate",
    email: "obli@terate.com",
}

for(let property in person){
    // Exibe o nome da propriedade
    console.log(property)

    // Exibe o conteudo da propriedade
    console.log(person[property])
}

let students = ["obli","thai", "jeso"]

for(let index in students){
    //console.log(index)
    console.log(students[index])
}
*/

// For...of => itera sobre valores de um objeto iterável
/*
let students = ["Thai", "obli", "jeso"]

for(let student of students){
    console.log(student)
}

let user = [{
    name: "antedeguemon",
    email: "antedeguemon@email.com",
}]

for (let value of user){
    console.log(value.email)
}
*/
// Break encerra a execução da repeticou ou switch para seguir para a instrução seguinte
/*
let option = 3

switch (option){
    case 1:
        console.log("Cadastrar")
        break
    case 2:
        console.log("Cadastrar2")
        break
    case 3:
        console.log("Cadastrar3")
        break
    default:
        console.log("opção invalida")
        break
}
*/
/*
// Utilizando o break para finalizar a repetição.
for(let i = 0; i < 10; i++){
    if(i === 5){
        break
    }
    console.log(i)
}
*/

// Continue encerra (pula) a execução das instruções na iteração atual e continua a execução do loop com a próxima iteração
/*
for(let i=0; i<10; i++){
    if(i === 5){
        continue
    }

    console.log(i)
}
*/

//------------------------------------------------------------------
//  Data e hora
/*
// Exibe a data e hora atual
console.log(new Date())
// Exibe a data e hora de ferefencia(considera o fuso)
console.log(new Date(0))

//exime o número de milissegundos
console.log(new Date().getTime())
*/
//------------------------------------------------------------------
/*
// ano, mes(0 a 11), dia
console.log(new Date(2024,11,3))

// Define data e hora. Ano, mes, dia, hora, minuto, segundos 
console.log(new Date(2024, 4 , 3, 14, 30, 0))
// Definindo data e hora como string (mes de 0 a 12)
console.log(new Date("2024-07-03T14:30:00"))
console.log(new Date("July 5, 2014 13:20:30"))
*/
//------------------------------------------------------------------
/*
let date = new Date("2024-07-02T14:30:10")

// Dia da semana de 0 à 6 (domingo é 0)
console.log(date.getDay())

// Dia do mês (0 à 30)
console.log(date.getDate())

// Mes
console.log(date.getMonth() + 1)

//ano 
console.log(date.getFullYear())

//horas
console.log(date.getHours())

//minuto
console.log(date.getMinutes())

//segundos
console.log(date.getSeconds())
*/

//------------------------------------------------------------------
/*
let date = new Date ("july 8, 2024 15:14:00")


// Modificar o ano
date.setFullYear(2030)
// Modificar o mes (começa no 0)
date.setMonth(0)
// Modificar o dia 
date.setDate(11)
// Modificar a hora
date.setHours(6)
// Modificar os minutos
date.setMinutes(0)
// Modificar os segundos
date.setSeconds(30)

console.log(date)
*/
//------------------------------------------------------------------
/*
let date = new Date("2024-07-02T15:22:10")
// Para mostrar sempre dois digitos e quando não tiver completa com 0
let day = date.getDate().toString().padStart(2, "0")
console.log(day)

let month = (date.getMonth() +1).toString().padStart(2, "0")
console.log(month)

let year = date.getFullYear()
let hour = date.getHours()
let minute = date.getMinutes()
console.log(`${day}/${month}/${year} às ${hour}:${minute}`)
*/
//------------------------------------------------------------------
/*
let date = new Date("2024-07-02T14:30:00")

// Converte para string
console.log(date.toString())
// Retorna somente a data.
console.log(date.toDateString())
// Retorna somente a hora
console.log(date.toTimeString())
*/
//------------------------------------------------------------------
/*
let date = new Date("2024-07-02T14:00:00")
// Exibe data e hora no formato local.
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())
// Exibe data e hora no formato escolhido.
console.log(date.toLocaleDateString("ko"))
console.log(date.toLocaleTimeString("el"))
*/
//------------------------------------------------------------------
/*
let date = new Date("2024-07-02T14:30:10")

console.log(date.toLocaleString("en"))
// Exibe data e hora em style diferentes
console.log(date.toLocaleString("pt-br",{
    dateStyle:"short",
}))
console.log(date.toLocaleString("pt-br",{
    dateStyle:"long",
}))
console.log(date.toLocaleString("pt-br",{
    dateStyle:"medium",
}))
console.log(date.toLocaleString("ja",{
    dateStyle:"full",
}))

console.log(date.toLocaleString("pt-BR",{
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
}))

let amount = 12.5
console.log(amount.toLocaleString("pt-BR",{
    style: "currency",
    currency: "cny",
}))
*/
//------------------------------------------------------------------
/* Timestamp => O número que representa uma data, valor que representa um ponto especifico no tempo
Data no js é baseada no valor de tempo em ms
Duas maneiras de interpretar data e hora:
local - localidade atual
UTF - TEMPO UNIVERSAL COORDENADO   */
//------------------------------------------------------------------
/*
// Intl é a API de internacionalização do ECMAScript

// Obtem informações da localidade
const currentLocale  = Intl.DateTimeFormat().resolvedOptions()
console.log(currentLocale)
// Exibe no formato de acordo com a localidade.
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))
console.log(new Intl.DateTimeFormat("en-US").format(new Date()))

const date = new Date()
// Obtem a diferença em minutos do timezone
console.log(date.getTimezoneOffset())
// Obtem a diferença em horas do timezone
console.log(date.getTimezoneOffset() / 60)
*/
//------------------------------------------------------------------
/*
const dateWithTimezone = new Date("2024-09-04T22:54:11.976+03:00")
//console.log(dateWithTimezone.toISOString())
console.log(new Date().toLocaleString)
console.log(dateWithTimezone.toLocaleString())
*/
//------------------------------------------------------------------

// CLASSES => forma mais simples para criar objetos
/*
class Person {
    constructor(name){
        console.log("Olá", name)
    }
}

const person = new Person("Obli")
*/
//------------------------------------------------------------------
/*
class Product{
    constructor(name){
        this.name = name  //this refere ao contexto que ta inserido
    }
}

const product1 = new Product("Teclado")
console.log(product1.name)

const product2 = new Product("Mouse")
console.log(product2.name)
*/
//------------------------------------------------------------------
/*
// Métodos dentro de classes
class User {
    constructor(name, email){
        this.name = name
        this.email = email
    }

    sendEmail(){
        console.log("E-mail enviado para", this.name,"no endereço", this.email)
    }
}


const user = new User("Obli", "obli@email.com")
user.sendEmail()
*/
//------------------------------------------------------------------
// Método estatico
/*
class User{
    static showMessage(message){
        console.log(message)
    }
}

//const user = new User()
//user.showMessage()

User.showMessage("Essa é uma mensagem")
*/
//------------------------------------------------------------------
/*
// Aplicar herança com classe 
// Sobreencrevendo metodos
class Animal {
    constructor(name){
        this.name = name
    }

    makeNoise(){
        console.log("Algum som genérico do animal")
    }
}

class Dog extends Animal{
    // Herdou o conteudo da class Animal
    makeNoise(){
        console.log("wooof! woof! woof! ???")
    }
}
const dog = new Dog("Flash")
console.log(dog.name)
dog.makeNoise()


class Cat extends Animal{
    makeNoise(){
        console.log("Mialeee...mialeeee")
    }
}
const cat = new Cat("house")
console.log(cat.name)
cat.makeNoise()
*/
//------------------------------------------------------------------,
/*
//Classes x Prototype

const address = {
    city: "São mateus do Sul",
    country: "Brazil"
}

console.log(address)


const users = ["Obli", "Thai", "Chili"]
console.log(users)

const userName = "Obliterate"
console.log(userName.__proto__)
*/
//------------------------------------------------------------------
/*
let obj = []

let index = 300

try {
    //obj.execute()

    if(!obj.includes(17)){
        throw new Error("O número 17 não está disponível.")
    }

    if(index > 99){
        throw new RangeError("Número está fora do intervalo. Escolha um número de 0 a 99")
    }

} catch (error) {
    if(error instanceof TypeError){
        console.log("Método indisponível.")
    }else if (error instanceof RangeError){
        console.log("Método indisponível")
    }else{
        console.log("Não foi possivel realizar a ação")
    }
}
*/
//------------------------------------------------------------------
/*
// Classes para criar erros customizados
class MyCustomError{
    constructor(message){
        this.message = "classe de erro customizada:" + message
    }
}

try {
    throw new MyCustomError("Erro personalizado lançado")
} catch (error) {
    if(error instanceof MyCustomError){
        console.log(error.message)
    }else{
        console.log("Não foi possivel executar")
    }
}
*/