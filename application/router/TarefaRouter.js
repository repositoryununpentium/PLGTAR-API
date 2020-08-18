const express = require("express");
const router = express.Router();

const TarefaController = require("../controller/TarefaController");

const TarefaMiddleware = require("../middleware/TarefaMiddleware");

const TarefaModel = require("../model/TarefaModel");

router.post("/", TarefaMiddleware, TarefaController.persist);

router.put("/:id", TarefaMiddleware, TarefaController.update);

router.get("/findall", TarefaController.findAll);

router.get("/finddispositivo", TarefaController.findDescricaoDispositivo);

router.get("/:id", TarefaController.findById);

router.delete("/:id", TarefaController.remove);

router.put("/:id/:isConcluido", TarefaController.alterarSituacaoTarefa);

router.get("/filter/tarefas-atrasadas/:descricaoDispositivo", TarefaController.recuperarTarefasAtrasadas);

router.get("/filter/tarefas-dia/:descricaoDispositivo", TarefaController.recuperarTarefasDia);

router.get("/filter/tarefas-semana/:descricaoDispositivo", TarefaController.recuperarTarefasSemana);

router.get("/filter/tarefas-mes/:descricaoDispositivo", TarefaController.recuperarTarefasMes);

router.get("/filter/tarefas-ano/:descricaoDispositivo", TarefaController.recuperarTarefasAno);

module.exports = router;