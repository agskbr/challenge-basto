import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomModal from "./components/CustomModal/CustomModal";
import CustomTable from "./components/CustomTable/CustomTable";
import { getAllAnimals } from "../../store/actions/index";
import style from "./AdminPage.module.scss";
import HeaderBar from "./components/HeaderBar/HeaderBar.jsx";

export default function AdminPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAnimals());
  }, []);
  return (
    <div className={style.principalContainer}>
      <HeaderBar />
      <div className={style.bodyContent}>
        <div className={style.routeDynamicText}>
          <span>Admin / Animales</span>
        </div>
        <div className={style.bodyTitle}>
          <span>Establecimiento Ganadero</span>
        </div>
        <CustomButton
          onClick={() => document.getElementById("customDialog").showModal()}
          label="Registrar un nuevo animal"
        />
        <CustomInput
          titleInput="Tipo animal / Número de registro"
          label="Tipo animal / Número de registro"
        />
        <CustomModal />
        <CustomTable tableTitle="Lista de establecimientos" />
      </div>
    </div>
  );
}
