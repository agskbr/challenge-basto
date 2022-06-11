import style from "./CustomTable.module.scss";
import { MdDelete, MdEditNote } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { deleteAnimal } from "../../../../store/actions";
import { Navigate, useNavigate } from "react-router-dom";

export default function CustomTable({ tableTitle }) {
  const navigate = useNavigate();
  const { animals } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [displayAnimals, setDisplayAnimals] = useState([]);

  useEffect(() => {
    if (animals) {
      setDisplayAnimals([...animals]);
    }
  }, [animals]);
  return (
    <div className={style.tableContainer}>
      <div className={style.titleOfTable}>
        <span>{tableTitle}</span>
      </div>
      <table>
        <thead>
          <tr>
            <td>ID SENASA</td>
            <td>Tipo Animal</td>
            <td>Peso Animal</td>
            <td>Tipo dispositivo</td>
            <td>N° de dispositivo</td>
            <td>Creación</td>
            <td>Actualización</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {displayAnimals.map((animal) => (
            <tr key={animal._id}>
              <td>{animal.ID_SENASA}</td>
              <td>{animal.type}</td>
              <td>{animal.weight}</td>
              <td>{animal.deviceType}</td>
              <td>{animal.deviceNum}</td>
              <td>{animal.createdAt ?? "No disponible"}</td>
              <td>{animal.updatedAt ?? "No disponible"}</td>
              <td>
                <div>
                  <MdEditNote
                    onClick={() => {
                      navigate(`/edit/${animal._id}`, { state: animal });
                    }}
                    size={25}
                    className={style.editActionIcon}
                  />
                  <MdDelete
                    onClick={() => dispatch(deleteAnimal(animal._id))}
                    size={25}
                    className={style.deleteActionIcon}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={style.paginated}>
        <div className={style.disabledPaginatedBtn}>Prev</div>
        <div className={style.activePage}>1</div>
        <div className={style.page}>2</div>
        <div className={style.page}>3</div>
        <div className={style.nextBtn}>Next</div>
      </div>
    </div>
  );
}
