import style from "./CustomModal.module.scss";
import { MdHighlightOff } from "react-icons/md";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import formValidation from "../../../../helpers/functions/formValidation";
import { createAnimal } from "../../../../store/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
export default function CustomModal() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    senasaId: "",
    type: "",
    weight: "",
    deviceType: "",
    deviceNum: "",
  });

  const [errors, setErrors] = useState({
    senasaId: "",
    type: "",
    weight: "",
    deviceType: "",
    deviceNum: "",
  });

  const handlerChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setErrors(formValidation({ ...input, [name]: value }));
    setInput((state) => ({ ...state, [name]: value }));
  };

  return (
    <dialog id="customDialog">
      <div className={style.dialogContainer}>
        <div className={style.modalHeader}>
          <span>Nuevo Dispositivo</span>
          <MdHighlightOff
            onClick={() => document.getElementById("customDialog").close()}
            size={30}
            className={style.closeBtn}
          />
        </div>
        <div className={style.divider}></div>
        <div className={style.formContainer}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setErrors(formValidation(input));
            }}
          >
            <label>ID SENASA</label>
            <input
              name="senasaId"
              onChange={handlerChange}
              value={input.senasaId}
              type="text"
              placeholder="Ej: asd123343123ab12"
            />
            <span>{errors.senasaId}</span>
            <label>Tipo de animal</label>
            <select name="type" onChange={handlerChange}>
              <option hidden>Tipo de animal</option>
              <option value="Novillo">Novillo</option>
              <option value="Toro">Toro</option>
              <option value="Vaquillona">Vaquillona</option>
            </select>
            <span>{errors.type}</span>
            <label>Peso del animal</label>
            <input
              value={input.weight}
              onChange={handlerChange}
              name="weight"
              type="number"
              placeholder="Ej: 500"
            />
            <span>{errors.weight}</span>
            <label>Tipo de dispositivo</label>
            <select name="deviceType" onChange={handlerChange}>
              <option hidden>Tipo de dispositivo</option>
              <option value="COLLAR">COLLAR</option>
              <option value="CARAVANA">CARAVANA</option>
            </select>
            <span>{errors.deviceType}</span>
            <label>Número de dispositivo</label>
            <input
              value={input.deviceNum}
              name="deviceNum"
              onChange={handlerChange}
              type="text"
              placeholder="Ej: 12345678"
            />
            <span>{errors.deviceNum}</span>
            <div className={style.submitBtn}>
              <CustomButton
                disabled={Object.values(errors).length}
                label="Crear"
                width="150px"
                onClick={() => {
                  if (Object.values(errors).length === 0) {
                    dispatch(
                      createAnimal({
                        ...input,
                        weight: parseInt(input.weight),
                      })
                    );
                    document.getElementById("customDialog").close();
                  }
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}
