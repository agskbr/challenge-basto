import axios from "axios";
import {
  GET_ALL_ANIMALS,
  GET_ANIMAl_BY_ID,
  REQUEST_POST,
} from "../actions-type/types";

const base_url = "http://localhost:3001";

const createAnimal = (animal) => {
  return async () => {
    await axios.post(`${base_url}/animal`, animal);
  };
};

const getAllAnimals = () => {
  return async (dispatch) => {
    const animals = await axios.get(`${base_url}/animal`);
    dispatch({ type: GET_ALL_ANIMALS, payload: animals });
  };
};

const getAnimalById = (id) => {
  return async (dispatch) => {
    const animal = await axios.get(`${base_url}/animal/${id}`);
    dispatch({ type: GET_ANIMAl_BY_ID, payload: animal });
  };
};

const updateAnimal = (id, animal) => {
  return async () => {
    await axios.put(`${base_url}/animal/${id}`, animal);
  };
};

const deleteAnimal = (id) => {
  return async () => {
    await axios.delete(`${base_url}/animal/${id}`);
  };
};

const requestPost = () => {
  return { type: REQUEST_POST };
};

export {
  createAnimal,
  getAllAnimals,
  getAnimalById,
  updateAnimal,
  deleteAnimal,
  requestPost,
};
