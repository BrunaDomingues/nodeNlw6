import express from  "express";
const app = express();
/**
 * GET =>   Buscar infos
 * POST =>  Inserir(criar) info
 * PUT =>   Alterar info
 * DELETE =>    Remover um dado
 * PATCH =>     Alterar info especifica
 */
app.get("/test", (request, response) => {
    // Request => Entrando
    // Response => Saindo
    return response.send("Olá NLW");
});
app.listen(3000, () => console.log("server is runing"));