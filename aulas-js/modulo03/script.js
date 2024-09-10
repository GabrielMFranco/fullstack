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
/*
// Método findIndex() => retorna o indice no array do primeiro elemento que satisfazer a condição. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

const values = [4, 6, 8, 12]
// Obtendo o primeiro indice do elemento que o valor é > 4
console.log(values.findIndex((value)=> value > 4))

// Exemplo de quando não encontra
console.log(values.findIndex((value)=> value > 12))
*/
//---------------------------------------------------------------
/*
// Método find() => retorna o valor do primeiro elemento do array que satisfizer a condição. Caso contrario, retorna undefined.

const values = [5,12,8,130,44]
// Retorna o primeiro elemento que o valor é maior que 10
const found = values.find((value => value > 10))
console.log(found)

// Exemplo com objetos.
const fruits = [
    {  name: "apple", quantity: 23},
    {  name: "banana", quantity: 25},
    {  name: "laranja", quantity: 52},
]

const results = fruits.find((fruit) => fruit.name === "banana")
console.log(results)
*/
//--------------------------------------------------------------- 
/*
// Método every() => testa se todos os elementos do array passam na condição e retorna um valor boolean.

// Exemplo de array de idades.

const ages = [15,30,39,29]

// Verificando se todas as idades são aiores ou igual a 18
const result = ages.every((age)=> age >= 18)
console.log(result)
*/
//---------------------------------------------------------------
/*
// Método some() => testa se ao menos um dos elementos no array passa na condição e retorna um valor true ou false

// Exemplo de array de idades
const ages = [15,30,39,29]

const result = ages.some((age) => age < 18)
console.log(result)
*/
//---------------------------------------------------------------
/*
// Método reduce() => Reduz o array a um único valor.
//    Parametros
//    - Array original
//    - Acumulador
//    - Valor da iteração
//    - Valor inicial
//    - Index 

const values = [1,2,3,4,5]
const sum = values.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
},0)
console.log(sum)
*/
//---------------------------------------------------------------
//                    IMUTABILIDADE
/*
// Você não pode modificar seus valores ou propriedades, mas pode criar uma cópia modificada para manter o original inalterado. 

const address1 = {
    street: "av.brasil",
    number: 20,
 }
// Criando um novo objeto utilidando propriedades e valores de address1
const address2 = {...address1}
address2.number = 30

console.log(address1, address2)

// Segunda maneira
const address3 = {...address1, number:10}
console.log(address1, address3)

// Exemplo array
const list1 = ["apple", "banana"]

const list2 = [...list1, "watermelon"]
//list2.push("Watermelon")

console.log(list1,list2)
*/
//---------------------------------------------------------------
/*
// Shallow copy (cópia superficial) => não pega os itens aninhados.

const htmlCourse = {
    course: "HTML",
    students:[{name:"Obli", email:"obli@email.com"}],
}

// const jsCourse = {
//     ...htmlCourse,
//     course: "Javascript"
// }
// Vai alterar os dois porque students é uma referencia, e não uma copia
// jsCourse.students.push({name:"Thai", email:"thai@email.com"})

// Deep copy(copia profunda) 
const jsCourse = {
    ...htmlCourse,
    course: "Javascript",
    students: [...htmlCourse.students,{name:"Thai", email:"thai@email.com"}]
}
// Outro modo:
jsCourse.students.push({name:"Chili", email:"chili@email.com"})
console.log(htmlCourse, jsCourse)

// Outra versão:
const csharpCourse = {
    ...htmlCourse,
    course: "C#"
}
csharpCourse.students = [
    ...htmlCourse.students,
    {name: "masker", email:"masker@email.com"},
]
console.log(htmlCourse, csharpCourse)
*/
//---------------------------------------------------------------
/*
// Object.feeze() => impede modificações nos objetos:

const book = {
    title: "Objetos imutaveis",
    category: "javascript",
    author:{
        name:"obli",
        email:"obli@email.com",
    },
}
// O js em si não impoe restrições a modificações dos obj.
//book.category = "HTML"

// Congela o objeto e impede a modificação
Object.freeze(book)
book.category = "css" // Não modifica
book.author.name = "jeso" // Não impede modificações profundando em obj aninhados
console.log(book)
*/
//---------------------------------------------------------------
/*
// Deep Freeze
const book = {
    title: "Objetos imutaveis",
    category: "javascript",
    author:{
        name:"obli",
        email:"obli@email.com",
    },
}
function deepFreeze(object){
    // obtem um array com todas as propriedades do objeto
    const props = Reflect.ownKeys(object)
    // Itera sobre todas as propriedades do objeto
    for(const prop of props){
        // Obtem o valor associado a propriedade atual.
        const value = object[prop]
        // Verifica se o lavor é um objeto ou função para continuar aplicando o deepfreeze em objetos aninhados
        if(value && typeof value === "object" || typeof value === "function"){
            deepFreeze(value)
        }
    }
    // Reteorna o objeto congelado
    return Object.freeze(object)
}
// Chama a função para congelar o objeto com Deep Freeze(congelamento profundo)
deepFreeze(book)

console.log(book)
*/
//---------------------------------------------------------------
/*
const book = {
    title: "Objetos imutaveis",
    category: "javascript",
    author:{
        name:"obli",
        email:"obli@email.com",
    },
}

const updatedBook = {
    ...book,
    title: "Criando um Front-ent moderno com HTML",
    category: "HTML",
    type:"Programming",
}

// Original intacto
console.log(book)
// Modificado
console.log(updatedBook)

// Utilizando operador de desestruturação para remover propriedades. (rest operator)
const {category,...bookWithoutCategory} = book
console.log(bookWithoutCategory)
*/
//---------------------------------------------------------------
//                MÓDULOS

// ES Module => é um sistema de módulo js, Define um formato para organizar e estruturar o codigo em módulos, permitindo a modularização e reutilização do código.
/*  Principais caracteristicas:
    - Módulo => encapsulamento de código em módulos permitindo a separação de responsabilidade e reutilização do codigo
    - Import => usado para incluir modulos
    - export => isado para expor funcionalides de um módulo para outro. */

//---------------------------------------------------------------
//                 FUNÇÕES ASSINCRONAS
/*
// setTimeout() => executa uma função após um intervalo de tempo especifico

setTimeout(() => {
    console.log("Olá mundo")
}, 1000) //tempo em ms
*/
//---------------------------------------------------------------
/*
// setInterval() => executa uma uma função apos um intervalo de tempo especifico continuamente

let value = 10

const interval = setInterval(() =>{
    console.log(value--)

    if(value === 0){
        console.log("fim")
        // interompe o intervalo de execuções
        clearInterval(interval)
    }
},1000)
*/
//---------------------------------------------------------------

// Função assincroná => quando chamada, ela retorna uma Promise 
/*
function asyncFunction(){
    return new Promise((resolve, reject) => {
        // Simular uma operação assincrona.
        setTimeout(()=>{
            const isSuccess = true
    
            if(isSuccess){
                resolve("A operação foi concluida com sucesso!")
            }else{
                reject("algo deu errado")
            }
        }, 3000)// Simula uma operação que leva 3s
    })
}

// Visualizando que o retorno é uma promisse.
// console.log(asyncFunction())

asyncFunction().then((response)=>{
    console.log("Sucesso:", response)
}).catch((error)=>{
    console.log("Erro:", error)
}).finally(()=>{
    console.log("fim da execução")
})
*/
/*
function asyncFunction(){
    return new Promise((resolve, reject) => {
        // Simular uma operação assincrona.
        setTimeout(()=>{
            const isSuccess = true
    
            if(isSuccess){
                resolve("A operação foi concluida com sucesso!")
            }else{
                reject("algo deu errado")
            }
        }, 3000)
    })
}
//  Normal
// async function fetch(){
//     const response = await asyncFunction()
//     console.log(response)
// } 
// arrow
const fetch = async() =>{
    try{
    const response = await asyncFunction()
    console.log("Sucesso:", response)
    } catch(error){
        console.log("Erro:", error)
    } finally{
        console.log("fim da execução")
    }
}

fetch()
*/
//---------------------------------------------------------------
/*
//  EVENT
// (1) executa o cod de forma sincrona e vai ser impresso no console no inicio
console.log(1)

// (3) microtasks são executadas antes de temporizadores e promessas.
queueMicrotask(() => {
    console.log(2)
})

// (5) macrotask que aguarda o evento de temporizador ser adicionado
setTimeout(() =>{
    console.log(3)
}, 1000)

//(2) Execução sincrona.
console.log(4)

// (4) Adiciona um microtask.
Promise.resolve(true).then(() =>{
    console.log(5)
})
*/
//---------------------------------------------------------------

// Pacotes (ou bibliotecas) => fornecem funcionalidade prontas que você pode reutilizar em seus próprios projeto. Isso economiza tempo e esforço, evitando a necessidade de reescrever funcionalidades.

//---------------------------------------------------------------