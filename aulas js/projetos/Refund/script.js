// Seleciona os elementos do formulário
const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const expense = document.querySelector("#expense")
const category = document.querySelector("#category")

// Seleciona os elementos da lista
const expenseList = document.querySelector("ul")
const expensesTotal = document.querySelector("aside header h2")
const expensesQuantity = document.querySelector("aside header p span")

// Captura o evento de input
amount.oninput = () => {
    // Obtem o valor atual do input e remove os caracteres não numericos
    let value = amount.value.replace(/\D+/g, "") 
    //transforma o valor em centavos
    value = Number(value) / 100

    // Atualiza o valor do input
    amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value){
    // Formata o valor no padrão BRL
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
    // Retorna o valor formatado
    return value
}

// Captura o evento de submit do formulario
form.onsubmit = (event) => {
    event.preventDefault()

    // Cria um objeto com os detalhes da nova despesa
    const newExpense =  {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    } 
    // Chama a função que irá add o item na lista
    expenseAdd(newExpense)
}

// Adiciona um novo item na lista.
function expenseAdd(newExpense){
    try {
        // Cria o elemento li para add o item na ul.
        const expenseItem = document.createElement("li")
        expenseItem.classList.add("expense")

        // Cria o icone da categoria
        const expenseIcon = document.createElement("img")
        expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
        expenseIcon.setAttribute("alt", newExpense.category_name)

        // Cria a info da despeza
        const expenseInfo = document.createElement("div")
        expenseInfo.classList.add("expense-info")

        // Cria o nome da despesa
        const expenseName= document.createElement("strong")
        expenseName.textContent = newExpense.expense
        // Cria a categoria da despesa.
        const expenseCategory = document.createElement("span")
        expenseCategory.textContent = newExpense.category_name

        // Adiciona 'name' e 'category' na div
        expenseInfo.append(expenseName, expenseCategory)

        // Cria o valor da despesa.
        const expenseAmount = document.createElement("span")
        expenseAmount.classList.add("expense-amount")
        expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace("R$", "")}`

        // Cria o icon de remover
        const expenseRemove = document.createElement("img")
        expenseRemove.classList.add("remove-icon")
        expenseRemove.setAttribute("src", "img/remove.svg")
        expenseRemove.setAttribute("alt", "remover")

        // Adiciona as informações no item
        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, expenseRemove)
        // Adiciona o item na lista
        expenseList.append(expenseItem)

        // Limpa o form para add um novo item
        formClear()

        // Atualiza os totais.
        updateTotals()

    } catch (error) {
        alert("Não foi possivel atualizar a lista de despesas.")
        console.log(error)
    }
}

// Atualiza os totais
function updateTotals(){
    try{
        // Recupera todos os itens da lista
        const items = expenseList.children
        
        // Atualiza a quantidade de item na li
        expensesQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`

        // Variavel para incrementar o totam
        let total = 0

        // Percorre cada li da ul pegando o valor e somando
        for(let item = 0; item < items.length; item++){
            const itemAmount = items[item].querySelector(".expense-amount")

            // Remover caracteres não númericos e substitui a , por .  
            let value = itemAmount.textContent.replace(/[^\d,]/g, "").replace(",", ".")
            // Converte o valor para float
            value = parseFloat(value);

            // Verificar se é um número válido
            if(isNaN(value)){
                return alert("Não foi possivel calcular o total. o Valor não parece ser um número.")
            }

            // Incrementando o valor total.
            total += Number(value);
        }
        expensesTotal.textContent = total
        
        // Cria a span para adicionar o R$ formatado.
        const symbolBRL = document.createElement("small")
        symbolBRL.textContent = "R$";
        // Formata o valor e remove o R$ que sera exibido pela small com um estilo customizado
        total= formatCurrencyBRL(total).toUpperCase().replace("R$", "")

        // Limpa o conteúdo do elemento.
        expensesTotal.innerHTML = ""
        // Adiciona o simbolo da moeda e o valor total formatado
        expensesTotal.append(symbolBRL, total)
        console.log(expensesTotal)

    } catch(error){
        alert("Não foi possível atualizar os totais.")
        console.log(error)
    }
}

// Evento que captuta clique nos itens da lista.
expenseList.addEventListener("click", (event) => {
    // Verificar se o elemento clicado é o ticon de remover.
    if(event.target.classList.contains("remove-icon")){
        // Obtem a li pai do elemento clicado.
        const item = event.target.closest(".expense")
        // Remove o item da lista
        item.remove()
    }
    // Atualiza o valor total
    updateTotals()
})

function formClear(){
    expense.value = ""
    category.value = ""
    amount.value = ""

    expense.focus()
}