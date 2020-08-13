const TarefaModel = require("../model/TarefaModel");

class TarefaController {

    async persist(request, response) {
        try {
            const tarefa = new TarefaModel(request.body);
            await tarefa.save().then( tarefaPersistida => {
                return response.status(201).json( tarefaPersistida ); 
            });
        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }

}

module.exports = new TarefaController();