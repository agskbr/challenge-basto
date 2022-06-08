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

const getAllAnimals = async (req, res) => {};

const getAnimalById = async (req, res) => {};

const updateAnimal = async (req, res) => {};

const deleteAnimal = async (req, res) => {};

module.exports = {
  createAnimal,
  getAllAnimals,
  getAnimalById,
  updateAnimal,
  deleteAnimal,
};
