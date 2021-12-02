import React from "react";

// importing components
import Badges from "../../common/Badges";

//importing styles
import styles from "../../../styles/dashboard/main/ItemGrid.module.scss";

import { TquoteData } from "../../../interfaces/quoteData";

type PropsType = {
  data: TquoteData[];
};

const ItemGrid: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.itemGrid}>
      <table>
        <tr>
          <th>QUOTE NAME</th>
          <th>MAIL ID</th>
          <th>NUMBER</th>
          <th>REQUEST DATE</th>
          <th>UPLOADS</th>
          <th>STATUS</th>
        </tr>
        {props.data.map((item) => (
          <tr className={styles.dataRow}>
            <td className={styles.dataCells}>
              <input type="checkbox" />
              {item.name}
            </td>
            <td className={styles.dataCells}>{item.mail}</td>
            <td className={styles.dataCells}>{item.number}</td>
            <td className={styles.dataCells}>{item.date}</td>
            <td className={styles.dataCells}>{item.uploads} files</td>
            <td className={styles.dataCells}>
              <Badges typeOfBadge={item.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ItemGrid;
