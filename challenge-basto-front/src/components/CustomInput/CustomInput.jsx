import CustomButton from "../CustomButton/CustomButton";
import style from "./CustomInput.module.scss";

export default function CustomInput({ titleInput, label }) {
  return (
    <div className={style.customInput}>
      <span>{titleInput}</span>
      <div className={style.inputContainer}>
        <input type="search" placeholder={label} />
        <CustomButton label="Buscar" />
      </div>
    </div>
  );
}
