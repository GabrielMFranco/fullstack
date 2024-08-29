//visualizar o conteúdo do document.
// console.log(document)

//obter o title da página.
console.log(document.title)
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

const guests = document.querySelector("ul")

const newGuest = document.createElement("li")
newGuest.classList.add("guest")
const guestName = document.createElement("span")

guestName.textContent = "Chili"


newGuest.append(guestName) // adiciona apos o ultimo filho
guests.append(newGuest)






