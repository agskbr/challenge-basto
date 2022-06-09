import style from "./HeaderBar.module.scss";
import { MdNotificationsNone, MdLogout } from "react-icons/md";
import logo from "../../../../assets/logo-main.png";

export default function HeaderBar() {
  return (
    <header className={style.headerBar}>
      <img src={logo} alt="bastó" />
      <div className={style.barIcons}>
        <div className={style.iconNotification}>
          <MdNotificationsNone
            color="#33445d"
            size={30}
            className={style.icon}
          />
          <div className={style.notificationCount}>0</div>
        </div>
        <MdLogout color="#33445d" size={30} className={style.icon} />
      </div>
    </header>
  );
}
