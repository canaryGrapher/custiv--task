import React from "react";

//importing components
import Badges from "../../../../common/Badges";

// importing styles
import styles from "../../../../../styles/dashboard/main/Panels/RecentQuotePanel.module.scss";

import { TquoteData } from "../../../../../interfaces/quoteData";

type PropTypes = {
  recentTwo: TquoteData[];
};

const RecentQuotePanel: React.FC<PropTypes> = (props) => {
  return (
    <div className={styles.recentActivityPanel}>
      <p>Recent Quotes</p>
      <div className={styles.quotePanelContainer}>
        {props.recentTwo.map((item) => (
          <div>
            <p>{item.name}</p>
            <Badges typeOfBadge={item.status} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentQuotePanel;
