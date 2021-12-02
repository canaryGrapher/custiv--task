import React from "react";

//importing assets
import { plus } from "../../assets";

//importing styles
import styles from "../../styles/common/button.module.scss";

type PropsType = {
  variety: "add";
  label: string;
};

const Button: React.FC<PropsType> = (props) => (
  <button className={styles.customButton}>
    <img src={plus} alt="" />
    <p>{props.label}</p>
  </button>
);

export default Button;
