import React from "react";

//importing components
import Button from "../../../common/Button";

//importing assets
import { notificationBell, dropDownArrow } from "../../../../assets";

//importing styles
import styles from "../../../../styles/dashboard/main/Bars/MenuBar.module.scss";

type PropsType = {
  name: string;
  mail: string;
  pic: string;
  status: "online" | "offline" | "away";
};

const MenuBar: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.menuBar}>
      <div className={styles.titleContainer}>
        <h3>Quotes</h3>
      </div>
      <div className={styles.informationPanel}>
        <div className={styles.userInformation}>
          <div className={styles.notificationBellHolder}>
            <img
              src={notificationBell}
              alt=""
              className={styles.notificationBell}
            />
          </div>
          <div className={styles.userInformationPanel}>
            <p>{props.name}</p>
            <p>{props.mail}</p>
          </div>
          <div className={styles.dropdown}>
            <img src={dropDownArrow} alt="dropdown icon" />
          </div>
        </div>
        <div>
          <Button label="Start new quote" variety="add" />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
