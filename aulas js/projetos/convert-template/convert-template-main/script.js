// Cotação de moedas do dia
const USD = 5.62
const EUR = 6.22
const GBP = 7.39

//obtendo os elementos do formulario
const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")

// Manipulando o input#amount para receber somente números
amount.addEventListener("input", () =>{
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Captando o evento de submit do formulario
form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol){
    try {
        //  Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        //calcula o total
        let total = amount * price
        //verifica se o resultado não é um número
        if(isNaN(total)){
            return alert("Por favor, digite o valor corretamente para converter.")
        }

        //formata o valor total para a exibição
        total = formatCurrencyBRL(total).replace("RS", "")

        //exibe o resultado total
        result.textContent = `${total} Reais`
        
        // Aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")

    } catch (error) {
        console.log(error)
        // remove a classe footer para remover ele da tela
        footer.classList.remove("show-result")
        alert("Não foi possível converter. Tente novamente")
    }
}

// Formata a moeda em real brasileiro
function formatCurrencyBRL(value){
    // Converte para número para utilizar o toLocaleString para formatar no parão BRL
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}
