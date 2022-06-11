import style from "./CustomButton.module.scss";

export default function CustomButton({ label, onClick, width = "auto" }) {
  return (
    <button
      onClick={onClick}
      style={{ width: `${width}` }}
      className={style.customBtn}
    >
      {label}
    </button>
  );
}
