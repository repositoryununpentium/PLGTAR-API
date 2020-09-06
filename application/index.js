const express = require("express");
const server = express();
const cors = require("cors");

server.use(express.json());
server.use(cors());

const TarefaRouter = require("./router/TarefaRouter");
server.use("/tarefa", TarefaRouter);

server.get("/", (request, response) => {
    response.send("Conexão Realizada com Sucesso na porta 3000!");
});

server.listen(2000, function(request, response) {
    console.log("Servidor disponível na porta 2000");
});
