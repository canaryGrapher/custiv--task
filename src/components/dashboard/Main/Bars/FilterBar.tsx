import React from "react";

//importing assets
import { search } from "../../../../assets";

//importing styles
import styles from "../../../../styles/dashboard/main/Bars/FilterBar.module.scss";

type PropsType = {
  sizeOfData: number;
};

const FilterBar: React.FC<PropsType> = (props) => (
  <div className={styles.filterBar}>
    <p>{props.sizeOfData} Total Quotes Found</p>
    <div>
      <div>
        <input type="search" placeholder="Search all quotes" />
        <img src={search} alt="" />
      </div>
      <select name="filter" id="quotes">
        <option value="all">Show all quotes</option>
        <option value="requested">Requested Quotes</option>
        <option value="received">Received Quotes</option>
        <option value="inprogress">In-progress quotes</option>
      </select>
    </div>
  </div>
);

export default FilterBar;
