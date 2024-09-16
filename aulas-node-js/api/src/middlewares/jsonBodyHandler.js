export async function jsonBodyHandler(request, response){
    // Adicionar cada chumk
    const buffers = []

    // Coleta os chunk de dados da requisição
    for await (const chunk of request){
        buffers.push(chunk)
    }

    try {
        // Concatena os chunk e converte para string, em seguida converte a string para JSON
        request.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        request.body = null
    }

    // Define o header de resposta como JSON
    response.setHeader("Content-Type", "application/json")
}