//visualizar o conteúdo do document.
// console.log(document)

//obter o title da página.
//console.log(document.title)
/*
// acessar um elemento pelo ID
 const guest = document.getElementById("guest-2")
 console.log(guest)
// mostra as propriedades do objeto (o meu ta invertido??)
 console.dir(guest)

// Acessar elementos por class
const guestClass = document.getElementsByClassName("guest")
console.log(guestClass)

console.log(guestClass.item(0)) // Exibir o primeiro elemento
console.log(guestClass[1]) // // Exibir o segundo elemento de outra forma

//selecionar elementos pelas tag
const guestsTag = document.getElementsByTagName("li")
console.log(guestsTag)

// querySelector
const guest = document.querySelector("#guest-2 span") //selecionar pelo ID
console.log(guest.textContent) // Retorna o conteudo como texto
guest.textContent = "Desmili"  //alterar o valor

//const guest = document.querySelectorAll(".guest") //selecionar todos da classe
//const guest = document.querySelector(".guest") //selecionar o primeiro pela classes
*/

// const guest = document.querySelector("#guest-1")
// console.log(guest.textContent) // Retorna o conteudo visivel e oculto
// console.log(guest.innerText)  // Retorna somente o conteudo visivel
// console.log(guest.innerHTML) // Retorna o html como texto

// const input = document.querySelector("#name")
// input.classList.add("input-error")  //adiciona a class
// input.classList.remove("input-error")  //remove a class
// input.classList.toggle("input-error")  //remove se tiver a classe e add se n tiver

// const button = document.querySelector("button") //pegando o elemento
// button.style.backgroundColor = "red"

// const guests = document.querySelector("ul")

// const newGuest = document.createElement("li")
// newGuest.classList.add("guest")
// const guestName = document.createElement("span")

// guestName.textContent = "Chili"


// newGuest.append(guestName) // adiciona apos o ultimo filho
// guests.append(newGuest)


//const input = document.querySelector("input")

//input.setAttribute("disabled",true) //desabilitando o input
//input.setAttribute("type", "number") // mudando atributo para numeros


// window.addEventListener("load", () => {
//     console.log("A página foi carregada!")
// })    
// addEventListener("click", (event) =>{
//     console.log(event)
// })

// const ul = document.querySelector("ul")

// ul.addEventListener("scroll", (event) =>{
//     console.log(ul.scrollTop)

//     if(ul.scrollTop >=156){
//         // console.log("Fim da lista")

//         ul.scrollTo({     // leva pro lugar mandado
//             top:0,
//             behavior:"smooth" // deixa mais suave a rolagem da volta
           
//         })
//     }
// })

// const button = document.querySelector("button")
// button.addEventListener("click", ()=>{
//     console.log("clicou")
// })

// const form = document.querySelector("form")

// form.onsubmit = (event) =>{
//       event.preventDefault()  // previnir o carregamento da pag
//       console.log("Você fez submit")
// }

/*
const input = document.querySelector("input")

// keydown
input.addEventListener("keydown", (event)=>{
    console.log(event.key) // o key mostra apenas as teclas clicadas
})
*/

/*
const input = document.querySelector("input")
input.addEventListener("keypress", (event)=>{
    console.log(event)
})
*/
/*
const input = document.querySelector("input")
input.onchange = (() =>{
    console.log("o input mudou")
})
//outro modo:
input.oncharge = () =>{
    inputCharge()   //chama a função
}
function inputCharge(){
    console.log("O input Mudou!")
}
*/

/*
const input = document.querySelector("input")

input.addEventListener("input", () =>{
//     console.log(input.value)  // recebe o valor do input
const value = input.value
const regex = /\D+/g
//console.log(value.match(regex)) //match verifica => verifica o value com o match

// const isValid = regex.test(value)  //testa se atende o padrão
// console.log(isValid)



})*/


const input = document.querySelector("input")
const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()

    const value= input.value
    const hasNumberRegex = /\d+/g

    if(hasNumberRegex.test(value)){
        alert("O texto contém números. Digite novamente")
    }else{
        alert("Enviado")
    }
    console.log(value)
}