const { request } = require("express");
const { isPast } = require("date-fns");

const TarefaModel = require("../model/TarefaModel");

const TarefaMiddleware = async (request, response, next) => {

    const { categoria, titulo, descricao, dataHoraExecucao, descricaoDispositivo } = request.body;

    if(!descricaoDispositivo) {
        return response.status(400).json( {Mensagem: "O campo '\DescricaoDispositivo\' é obrigatório!"} );
    } else if(!categoria) {
        return response.status(400).json( {Mensagem: "O campo ('\Categoria\') deve ser informado!"} );
    } else if(!titulo) {
        return response.status(400).json( {Mensagem: "O campo ('\Titulo\') deve ser informado!"} );
    } else if(!descricao) {
        return response.status(400).json( {Mensagem: "O campo ('\Descrição\') deve ser informado!"} );
    } else if(!dataHoraExecucao) {
        return response.status(400).json( {Mensagem: "O campo ('\Data Hora da Execução\') deve ser informado!"} );
    } else {

        let isExistTarefaDataHora = null;

        if(request.params.id) {
            isExistTarefaDataHora = await TarefaModel.findOne(
                { 
                    "_id": { "$ne": request.params.id }, // Retirar uma determiada tarefa a sera atualizada
                    "dataHoraExecucao": {"$eq": new Date(dataHoraExecucao)}, 
                    "descricaoDispositivo": {"$in": descricaoDispositivo}
                });
        } else {
            if(isPast(new Date(dataHoraExecucao))) {
                return response.status(401).json( {Mensagem: "A data não pode ser anterior a data atual!"} );
            }
            isExistTarefaDataHora = await TarefaModel.findOne( 
                { 
                    "dataHoraExecucao": {"$eq": new Date(dataHoraExecucao)}, 
                    "descricaoDispositivo": {"$in": descricaoDispositivo}
                });
        }

        if(isExistTarefaDataHora) {
            return response.status(401).json( {Mensagem: "Já existe uma tarefa nessa mesma data e horário cadastrada!"} );
        } else {
            next();
        }
        
    }

};

module.exports = TarefaMiddleware;