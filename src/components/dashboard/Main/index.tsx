import React from "react";

//importing data
import { quoteData } from "../../../data/samplequotes";
import { User } from "../../../data/userData";

//importing components
import MenuBar from "./Bars/MenuBar";
import RecentBar from "./Bars/RecentBar";
import FilterBar from "./Bars/FilterBar";
import ItemGrid from "./ItemGrid";

//importing styles
import styles from "../../../styles/dashboard/Main.module.scss";

const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <MenuBar {...User} />
      <RecentBar
        requestedQuote={
          quoteData.filter((obj) => obj.status === "requested").length
        }
        inProgressQuote={
          quoteData.filter((obj) => obj.status === "inprogress").length
        }
        receivedQuote={
          quoteData.filter((obj) => obj.status === "received").length
        }
        recentTwo={quoteData.slice(0, 2)}
      />
      <FilterBar sizeOfData={quoteData.length} />
      <ItemGrid data={quoteData} />
    </div>
  );
};

export default Main;
