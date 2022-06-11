import style from "./EditPage.module.scss";
import CustomButton from "../../components/CustomButton/CustomButton";
import formValidation from "../../helpers/functions/formValidation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateAnimal } from "../../store/actions";
import { MdArrowBack } from "react-icons/md";

export default function EditPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    senasaId: state.ID_SENASA,
    type: state.type,
    weight: state.weight,
    deviceType: state.deviceType,
    deviceNum: state.deviceNum,
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
    <div className={style.principalContainer}>
      <span>Edición de registros</span>
      <button
        onClick={() => {
          navigate("/");
        }}
        className={style.backButton}
      >
        <MdArrowBack />
      </button>
      <div className={style.inputsContainer}>
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
          <select
            defaultValue={state.type}
            name="type"
            onChange={handlerChange}
          >
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
          <select
            defaultValue={state.deviceType}
            name="deviceType"
            onChange={handlerChange}
          >
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
              label="Guardar"
              width="150px"
              onClick={() => {
                if (Object.values(errors).length === 0) {
                  dispatch(
                    updateAnimal(state._id, {
                      ...input,
                      weight: parseInt(input.weight),
                    })
                  );
                  navigate("/", { replace: true });
                }
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
