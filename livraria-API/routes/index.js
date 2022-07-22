const express = require("express");
const router = express.Router();
const LivrosController = require("../controller/LivrosController");

router.get("/listar", LivrosController.listar);
router.post("/", LivrosController.cadastrar);
router.put("/", LivrosController.atualizar);

module.exports = router;