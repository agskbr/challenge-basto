import style from "./CustomModal.module.scss";
import { MdHighlightOff } from "react-icons/md";
import CustomButton from "../CustomButton/CustomButton";
export default function CustomModal() {
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
            }}
          >
            <label>ID SENASA</label>
            <input type="text" placeholder="Ingresá el ID SENASA" />
            <label>Tipo de animal</label>
            <select name="typeAnimal">
              <option hidden>Tipo de animal</option>
              <option value="Novillo">Novillo</option>
              <option value="Toro">Toro</option>
              <option value="Vaquillona">Vaquillona</option>
            </select>
            <label>Peso del animal</label>
            <input type="text" placeholder="Peso del animal" />
            <label>Nombre de potrero</label>
            <input type="text" placeholder="Nombre del potrero" />
            <label>Tipo de dispositivo</label>
            <select name="typeDevice">
              <option hidden>Tipo de dispositivo</option>
              <option value="COLLAR">COLLAR</option>
              <option value="CARAVANA">CARAVANA</option>
            </select>
            <div className={style.submitBtn}>
              <CustomButton label="Crear" width="150px" />
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}
