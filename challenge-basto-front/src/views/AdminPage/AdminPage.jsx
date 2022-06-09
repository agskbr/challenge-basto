import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import style from "./AdminPage.module.scss";
import HeaderBar from "./components/HeaderBar/HeaderBar.jsx";

export default function AdminPage() {
  return (
    <div className={style.principalContainer}>
      <HeaderBar />
      <div className={style.bodyContent}>
        <div className={style.routeDynamicText}>
          <span>Admin / Establecimiento</span>
        </div>
        <div className={style.bodyTitle}>
          <span>Establecimiento Ganadero</span>
        </div>
        <CustomButton label="Crear nuevo establecimiento" />
        <CustomInput
          titleInput="Nombre / Número de registro"
          label="Nombre / Número de registro"
        />
      </div>
    </div>
  );
}
