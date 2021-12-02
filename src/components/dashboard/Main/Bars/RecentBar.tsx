import React from "react";

//importing component
import RecentQuotePanel from "./subComponents/RecentQuotePanel";
import RecentActivityPanel from "./subComponents/RecentActivityPanel";

//importing styles
import styles from "../../../../styles/dashboard/main/Bars/RecentBar.module.scss";

import { TquoteData } from "../../../../interfaces/quoteData";

type PropsType = {
  requestedQuote: number;
  inProgressQuote: number;
  receivedQuote: number;
  recentTwo: TquoteData[];
};

const RecentBar: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.recentBar}>
      <RecentActivityPanel
        requestedQuote={props.requestedQuote}
        inProgressQuote={props.inProgressQuote}
        receivedQuote={props.receivedQuote}
      />
      <RecentQuotePanel recentTwo={props.recentTwo} />
    </div>
  );
};

export default RecentBar;
