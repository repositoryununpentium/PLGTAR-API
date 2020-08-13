const express = require("express");
const router = express.Router();
const TarefaController = require("../controller/TarefaController");
const TarefaMiddleware = require("../middleware/TarefaMiddleware");

router.post("/", TarefaMiddleware, TarefaController.persist);

module.exports = router;