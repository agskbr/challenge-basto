const { Router } = require("express");
const { createAnimal } = require("../controllers/animals");

const router = Router();

router.post("/", createAnimal);

module.exports = router;
