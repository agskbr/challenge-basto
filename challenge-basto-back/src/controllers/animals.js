const { Animal } = require("../models");

const createAnimal = async (req, res) => {
  try {
    const { senasaId, type, weight, deviceType, deviceNum } = req.body;
    const createdAnimal = await Animal.create({
      ID_SENASA: senasaId,
      type,
      weight,
      deviceType,
      deviceNum,
    });
    res.json({ created: true, createdAnimal });
  } catch (error) {
    console.log(error);
    res.status(400).json({ created: false, error });
  }
};

const getAllAnimals = async (req, res) => {
  try {
    const animals = await Animal.find({});
    res.json(animals);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

const getAnimalById = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await Animal.findById(id);
    res.json(animal);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

const updateAnimal = async (req, res) => {
  try {
    const { senasaId, type, weight, deviceType, deviceNum } = req.body;
    const { id } = req.params;
    const updatedAnimal = await Animal.findByIdAndUpdate(id, {
      ID_SENASA: senasaId,
      type,
      weight,
      deviceType,
      deviceNum,
    });
    res.json({ updated: true, updatedAnimal });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

const deleteAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAnimal = await Animal.findByIdAndDelete(id);
    res.json({ deleted: true, deletedAnimal });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

module.exports = {
  createAnimal,
  getAllAnimals,
  getAnimalById,
  updateAnimal,
  deleteAnimal,
};
