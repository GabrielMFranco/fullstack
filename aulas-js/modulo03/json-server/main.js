// Utilizando o fetch com then.
// const response = fetch("http://localhost:3333/products").then((response) => response.json())
// .then((data) => console.log(data))

// Utilizando o fetch com async/await
async function fetchProducts(){
    const response = await fetch("http://localhost:3333/products")
    const data = await response.json()
    console.log(data)
}

async function fetchProductById(id) {
    const response = await fetch(`http://localhost:3333/products/${id}`)
    const data = await response.json()
    console.log(data)
}

// fetchProducts()
// fetchProductById("2")


// Pegando os inputs 
const productName = document.querySelector("#name")
const productPrice = document.querySelector("#price")
const form = document.querySelector("form")

// Adicionando evento no submit
addEventListener("submit", async (event)=>{
    event.preventDefault()
    // Gerando um novo produto na API
    await fetch("http://localhost:3333/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"        
        },
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            name: productName.value,
            price: productPrice.value,
        }),
    })
})