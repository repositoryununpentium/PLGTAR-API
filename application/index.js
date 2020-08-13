const express = require("express");
const server = express();

server.use(express.json());

const TarefaRouter = require("./router/TarefaRouter");
server.use("/tarefa", TarefaRouter);

server.get("/", (request, response) => {
    response.send("Conexão Realizada com Sucesso na porta 3000!");
});

server.listen(3000, function(request, response) {
    console.log("Servidor disponível na porta 3000");
});