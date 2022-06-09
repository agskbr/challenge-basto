const { Router } = require("express");
const {
  createAnimal,
  getAllAnimals,
  getAnimalById,
  updateAnimal,
  deleteAnimal,
} = require("../controllers/animals");

const router = Router();

router.post("/", createAnimal);

router.get("/", getAllAnimals);

router.get("/:id", getAnimalById);

router.put("/:id", updateAnimal);

router.delete("/:id", deleteAnimal);

module.exports = router;
