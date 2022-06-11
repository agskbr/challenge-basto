import style from "./CustomButton.module.scss";

export default function CustomButton({
  label,
  onClick,
  width = "auto",
  disabled = false,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{ width: `${width}` }}
      className={disabled ? style.disabledBtn : style.customBtn}
    >
      {label}
    </button>
  );
}
