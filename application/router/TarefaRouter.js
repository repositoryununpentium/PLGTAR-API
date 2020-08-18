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

module.exports = router;