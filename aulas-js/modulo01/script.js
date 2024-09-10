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

/*
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
    */



// Seleciona os elementos do formulãrio.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

// Seleciona os elementos da lista
const expenseList = document.querySelector("ul");
const expenseTotal = document.querySelector("aside header h2");
const expenseQuantity = document.querySelector("aside header p span");


// Captura o evento de input para formatar o valor.
amount.oninput = () => {
  // Obtém o valor atual do input e remove o caracteres não numéricos.
  let value = amount.value.replace(/\D/g, ""); 

  // Transforma o valor em centavos
  value = Number(value) / 100
  
  // Atualiza o valor do input.
  amount.value = formatCurrencyBRL(value);
  
}


function formatCurrencyBRL(value) {
  // Formata o valor no padrão BRL (Real Brasileiro)
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
  
  return value;
}

// Captura o evento de submit do formulário para obter os valores.
form.onsubmit = (event) => {
  // Previne o comportamento padrão de recarregar a página.
  event.preventDefault();

  // Cria um objeto com detalhes da nova despesa.
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  }

  expenseAdd(newExpense);
}

// Adiciona um novo item na lista
function expenseAdd(newExpense) {
  try {
    // Cria o elemento para adicionar o item (li) na lista (ul).
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");

    // Cria o icone da categoria.
    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", newExpense.category_name);

    // Cria a info da despesa
    const expenseInfo = document.createElement("div");
    expenseInfo.classList.add("expense-info")

    // Cria o nome da despesa
    const expenseName = document.createElement("strong");
    expenseName.textContent = newExpense.expense;

    // Cria categoria da despesa
    const expenseCategory = document.createElement("span");
    expenseCategory.textContent = newExpense.category_name;

    // Adiciona nome e categoria na div das informações de despesa.
    expenseInfo.append(expenseName, expenseCategory);

    // Cria o valor da despesa
    const expenseAmount = document.createElement("span");
    expenseAmount.classList.add("expense-amount");
    expenseAmount.innerHTML = `<small>R$</small> ${newExpense.amount.toUpperCase().replace("R$", "")}`

    // Adiciona o icon remove
    const expenseRemove = document.createElement("img");
    expenseRemove.classList.add("remove-icon");
    expenseRemove.setAttribute("src", "img/remove.svg");
    expenseRemove.setAttribute("alt", "remover");

    // Adiciona os itens na lista.
    expenseList.append(expenseItem);

    // Limpa os campos da lista.
    formClear();

    // Adiciona as informações no item.
    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, expenseRemove);

    updateTotals();

  } catch (error) {
    alert("Não foi possível atualizar a lista de despesa.")
    console.log(error)
  }
}

function updateTotals() {
  try {
    // Recupera todos os item (li) da lista (ul)
    const items = expenseList.children

    // Atualiza a quantidade de itens da lista
    expenseQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`;

    // Variável para incrementar o total.
    let total = 0;

    // Percorre cada item (li) da lista (ul)
    for (let item = 0; item < items.length; item++) {
      const itemAmount = items[item].querySelector(".expense-amount");

      // Remover caracteres não numéricos e substituir vírgula por ponto.
      let value = itemAmount.textContent.replace(/[^\d,]/g, "").replace(",", ".")

      // Converte o valor para floot
      value = parseFloat(value);

      // Verificar se é um número válido
      if (isNaN(value)) {
        return alert("Não foi possível calcular o total. O valor não parece ser um número.")
      }

      // Incrementar o valor total.
      total += Number(value);
    }

    // Cria a span para adicionar o R$ formatado.
    const symbolBRL = document.createElement("small");
    symbolBRL.textContent = "R$";

    // Formata o valor e remove o R$ que será exibido pelo small com um estilo customizado.
    total = formatCurrencyBRL(total).toUpperCase().replace("R$", "");

    // Limpa o conteúdo HTML.
    expenseTotal.innerHTML = "";

    // Adiciona o símbolo da moeda e o valor total formatado.
    expenseTotal.append(symbolBRL, total);

  } catch (error) {
    console.log(error);
    alert("Erro ao atualizar o total")
  }
}

// Evento que captura o click nos itens da lista
expenseList.addEventListener("click", (event) => {
  // Verificar se o elemento clicado é o icone de remover.
  if (event.target.classList.contains("remove-icon")) {
    // Obtém o li pai do elemento clicado.
    const item = event.target.closest(".expense");
    
    // Remove o item da lista
    item.remove();
  }

  // Atualiza os totais.
  updateTotals();
})


function formClear() {
  // limpa os campos da lista
  expense.value = "";
  category.value = "";
  amount.value = "";

  // Leva o cursou para o campo
  expense.focus();
}