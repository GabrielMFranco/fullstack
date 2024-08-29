//visualizar o conteúdo do document.
// console.log(document)

//obter o title da página.
console.log(document.title)

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

