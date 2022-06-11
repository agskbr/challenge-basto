import style from "./CustomTable.module.scss";
import { MdDelete, MdEditNote } from "react-icons/md";

export default function CustomTable({ tableTitle }) {
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
            <td>Nombre potrero</td>
            <td>Tipo dispositivo</td>
            <td>Nro dispositivo</td>
            <td>Creación</td>
            <td>Actualización</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123456789</td>
            <td>Piedra 1</td>
            <td>EC123123123</td>
            <td>100</td>
            <td>100</td>
            <td>1</td>
            <td>1/01/21</td>
            <td>10/11/21</td>
            <td>
              <div>
                <MdEditNote size={25} className={style.editActionIcon} />
                <MdDelete size={25} className={style.deleteActionIcon} />
              </div>
            </td>
          </tr>
          <tr>
            <td>123456789</td>
            <td>Piedra 1</td>
            <td>EC123123123</td>
            <td>100</td>
            <td>100</td>
            <td>1</td>
            <td>1/01/21</td>
            <td>10/11/21</td>
            <td>
              <div>
                <MdEditNote size={25} className={style.editActionIcon} />
                <MdDelete size={25} className={style.deleteActionIcon} />
              </div>
            </td>
          </tr>
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
