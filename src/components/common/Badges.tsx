import React from "react";

//importing assets
import { blueDot, greenDot, orangeDot } from "../../assets";

//importing styles
import styles from "../../styles/common/badges.module.scss";

type PropTypes = {
  typeOfBadge: "requested" | "inprogress" | "received";
};

const Badges: React.FC<PropTypes> = (props) => {
  let propImage;
  if (props.typeOfBadge === "requested") propImage = blueDot;
  if (props.typeOfBadge === "received") propImage = greenDot;
  if (props.typeOfBadge === "inprogress") propImage = orangeDot;
  return (
    <span className={`${styles.customBadge} ${styles[props.typeOfBadge]}`}>
      <img src={propImage} alt="" />
      <p
        className={`${styles[props.typeOfBadge]} ${
          styles[props.typeOfBadge + "Text"]
        }`}
      >
        {props.typeOfBadge.toUpperCase()}
      </p>
    </span>
  );
};

export default Badges;
