import style from "./CustomTable.module.scss";
import { MdDelete, MdEditNote } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { deleteAnimal } from "../../../../store/actions";
import { useNavigate } from "react-router-dom";

export default function CustomTable({ tableTitle }) {
  const navigate = useNavigate();
  const { animals } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [displayAnimals, setDisplayAnimals] = useState([]);
  const [paginated, setPaginated] = useState({ from: 0, to: 5 });
  const [selectedPageTab, setSelectedPageTab] = useState(1);

  const calculatePaginatedTabs = () => {
    const tabsCount = Math.ceil(displayAnimals.length / 5);
    const tabs = [];
    for (let i = 1; i <= tabsCount; i++) {
      tabs.push(i);
    }
    return tabs;
  };

  const isDisabledPaginatedButton = () => {
    const arrLength = displayAnimals.slice(
      paginated.from + 5,
      paginated.to + 5
    ).length;
    if (!arrLength) {
      return true;
    }
    return false;
  };

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
          {displayAnimals.slice(paginated.from, paginated.to).map((animal) => (
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
        <div
          className={
            paginated.from < 5 ? style.disabledPaginatedBtn : style.prevBtn
          }
          onClick={() => {
            if (paginated.from < 5) {
              return;
            }
            setSelectedPageTab((state) => state - 1);
            setPaginated((state) => ({
              from: state.from - 5,
              to: state.to - 5,
            }));
          }}
        >
          Prev
        </div>
        {/* <div className={style.activePage}>1</div> */}
        {calculatePaginatedTabs(displayAnimals).map((tab) => (
          <div
            key={tab}
            className={selectedPageTab === tab ? style.activePage : style.page}
          >
            {tab}
          </div>
        ))}
        <div
          className={
            isDisabledPaginatedButton()
              ? style.disabledPaginatedBtn
              : style.nextBtn
          }
          onClick={() => {
            if (!isDisabledPaginatedButton()) {
              setSelectedPageTab((state) => state + 1);
              setPaginated((state) => ({
                from: state.from + 5,
                to: state.to + 5,
              }));
            }
          }}
        >
          Next
        </div>
      </div>
    </div>
  );
}
