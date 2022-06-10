import style from "./CustomModal.module.scss";
import { MdHighlightOff } from "react-icons/md";
export default function CustomModal() {
  return (
    <dialog id="customDialog">
      <div className={style.modalHeader}>
        <span>Nuevo Dispositivo</span>
        <MdHighlightOff
          onClick={() => document.getElementById("customDialog").close()}
          size={30}
          className={style.closeBtn}
        />
      </div>
      <div className={style.divider}></div>
    </dialog>
  );
}
