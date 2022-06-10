import style from "./CustomButton.module.scss";

export default function CustomButton({ label, onClick }) {
  return (
    <button onClick={onClick} className={style.customBtn}>
      {label}
    </button>
  );
}
