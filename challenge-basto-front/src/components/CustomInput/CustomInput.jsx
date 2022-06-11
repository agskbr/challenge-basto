import { findAnimalByType } from "../../store/actions";
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";
import style from "./CustomInput.module.scss";
import { useDispatch } from "react-redux";

export default function CustomInput({ titleInput, label }) {
  const dispatch = useDispatch();
  // const [input, setInput] = useState("");
  return (
    <div className={style.customInput}>
      <span>{titleInput}</span>
      <div className={style.inputContainer}>
        <input
          onChange={(event) => dispatch(findAnimalByType(event.target.value.toLowerCase()))}
          type="search"
          placeholder={label}
        />
        <CustomButton
          label="Buscar"
        />
      </div>
    </div>
  );
}
