import React from "react";

//importing styles
import styles from "../../styles/dashboard/Main.module.scss";

const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <p>This is the main component</p>
    </div>
  );
};

export default Main;
