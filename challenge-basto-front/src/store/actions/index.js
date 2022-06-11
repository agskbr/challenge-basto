import axios from "axios";
import {
  GET_ALL_ANIMALS,
  GET_ANIMAl_BY_ID,
  REQUEST_POST,
} from "../actions-type/types";
import swal from "sweetalert";

const base_url = "http://localhost:3001/api";

const createAnimal = (animal) => {
  return async (dispatch) => {
    try {
      await axios.post(`${base_url}/animals`, animal);
      swal({
        title: "Registro creado correctamente",
        icon: "success",
        buttons: "Aceptar",
      });
      dispatch(getAllAnimals());
    } catch (error) {
      console.log(error);
      swal({
        title: `Algo salió mal ${error}`,
        icon: "error",
        buttons: "Aceptar",
      });
    }
  };
};

const getAllAnimals = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${base_url}/animals`);
      dispatch({ type: GET_ALL_ANIMALS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

const getAnimalById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${base_url}/animals/${id}`);
      dispatch({ type: GET_ANIMAl_BY_ID, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

const updateAnimal = (id, animal) => {
  return async (dispatch) => {
    try {
      await axios.put(`${base_url}/animals/${id}`, animal);
      dispatch(getAllAnimals());
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteAnimal = (id) => {
  return async (dispatch) => {
    try {
      const confirmDelete = await swal({
        title: "¿Seguro quieres borrar este registro?",
        buttons: {
          cancel: "No estoy seguro",
          confirm: {
            text: "Si, quiero borrarlo",
            value: true,
          },
        },
        icon: "warning",
      });
      if (confirmDelete) {
        await axios.delete(`${base_url}/animals/${id}`);
        dispatch(getAllAnimals());
      }
    } catch (error) {
      console.log(error);
    }
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
