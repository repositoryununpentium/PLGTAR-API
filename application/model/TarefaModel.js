const mongoose = require("../configuration/DatabaseConfiguration");

const Schema = mongoose.Schema;

const TarefaSchema = new Schema({
    categoria: { type: Number, required: true },
    titulo: { type: String, required: true },
    descricao: { type: String, required: true},
    dataHoraCriacao: { type: Date, default: Date.now() },
    dataHoraExecucao: { type: Date, required: true },
    descricaoDispositivo: { type: String, required: true },
    isConcluido: { type: Boolean, default: false }
});

module.exports = mongoose.model("TarefaModel", TarefaSchema);