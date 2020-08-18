const TarefaDescricaoDispositivoMiddleware = (request, response, next) => {

    if(!request.body.descricaoDispositivo) {
        return response.status(400).json( { Mensagem: "O campo '\DescricaoDispositivo\' é obrigatório!" } );
    } else {
        next();
    }

};

module.exports = TarefaDescricaoDispositivoMiddleware;