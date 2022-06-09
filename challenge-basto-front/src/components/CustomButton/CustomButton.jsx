import style from "./CustomButton.module.scss";

export default function CustomButton({ label }) {
  return <button className={style.customBtn}>{label}</button>;
}
