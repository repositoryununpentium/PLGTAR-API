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

    async update(request, response) {
        try {
            await TarefaModel.findByIdAndUpdate( { "_id": request.params.id }, request.body, { new: true } )
                .then(responseController => {
                    return response.status(200).json(responseController);
                });
        } catch (error) {
            console.log("Erro ao tentar alterar os dados:" + error);
            return response.status(400).json(error);
        }
    };

    async findAll(request, response) {
        try {
            await TarefaModel.find()
                .sort('dataHoraExecucao')
                .then(responseController => {
                    return response.status(200).json(responseController);
                });
        } catch (error) {
            console.log("Erro ao tentar recuperar os dados:" + error);
            return response.status(400).json(error);
        }
    };

    async findDescricaoDispositivo(request, response) {
        try {
            await TarefaModel.find({ descricaoDispositivo: { $in: request.body.descricaoDispositivo } })
                .sort('dataHoraExecucao')
                .then(responseController => {
                    return response.status(200).json(responseController);
                });
        } catch (error) {
            console.log("Erro ao tentar recuperar os dados:" + error);
            return response.status(400).json(error);
        }
    };

    async findById(request, response) {
        await TarefaModel.findById(request.params.id)
            .then(responseController => {
                if(responseController.id != null) {
                    return response.status(200).json(responseController);
                } else {
                    return response.status(404).json( {error: "Tarefa não encontrada!"} );
                }
            }
        ).catch(errorController => {
            console.log(errorController);
            return response.status(500).json( errorController );
        });
    };

    async remove(request, response) {
        try {
            await TarefaModel.deleteOne({ "_id": request.params.id })
                .then(responseController => {
                    return response.status(200).json(responseController);
                });
        } catch (errorController) {
            console.log(errorController);
            return response.status(500).json(errorController);
        }
    };

    async alterarSituacaoTarefa(request, response) {
        try {
            await TarefaModel.findByIdAndUpdate(
                { "_id": request.params.id },
                { "isConcluido": request.params.isConcluido },
                { new: true } // Devolve os dados ta rarefa atualizados
            ).then( responseController => {
                return response.status(200).json(responseController);
            });
        } catch (errorController) {
            console.log(errorController);
            return response.status(500).json(errorController);
        }
    };

}

module.exports = new TarefaController();