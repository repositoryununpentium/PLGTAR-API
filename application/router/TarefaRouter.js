const express = require("express");
const router = express.Router();
const TarefaController = require("../controller/TarefaController");
const TarefaMiddleware = require("../middleware/TarefaMiddleware");
const TarefaModel = require("../model/TarefaModel");

router.post("/", TarefaMiddleware, TarefaController.persist);

router.put("/:id", TarefaController.update);

module.exports = router;