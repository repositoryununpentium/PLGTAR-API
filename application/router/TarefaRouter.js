const express = require("express");
const router = express.Router();

const TarefaController = require("../controller/TarefaController");

const TarefaMiddleware = require("../middleware/TarefaMiddleware");
const TarefaDescricaoDispositivoMiddleware = require("../middleware/TarefaDescricaoDispositivoMiddleware");

const TarefaModel = require("../model/TarefaModel");

router.post("/", TarefaMiddleware, TarefaController.persist);

router.put("/:id", TarefaMiddleware, TarefaController.update);

router.get("/findall", TarefaController.findAll);

router.get("/finddispositivo", TarefaDescricaoDispositivoMiddleware, TarefaController.findDescricaoDispositivo);

router.get("/:id", TarefaController.findById);

router.delete("/:id", TarefaController.remove);

router.put("/:id/:isConcluido", TarefaController.alterarSituacaoTarefa);

router.get("/filter/tarefas-atrasadas", TarefaController.recuperarTarefasAtrasadas);

router.get("/filter/tarefas-dia", TarefaController.recuperarTarefasDia);

router.get("/filter/tarefas-semana", TarefaController.recuperarTarefasSemana);

router.get("/filter/tarefas-mes", TarefaController.recuperarTarefasMes);

router.get("/filter/tarefas-ano", TarefaController.recuperarTarefasAno);

module.exports = router;