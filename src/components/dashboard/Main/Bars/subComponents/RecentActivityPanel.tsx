import React from "react";

//importing assets
import {
  quotesRequestedIcon,
  quotesInProgressIcon,
  quotesReceivedIcon,
} from "../../../../../assets";

//importing styles
import styles from "../../../../../styles/dashboard/main/Panels/RecentActivityPanel.module.scss";

type PropTypes = {
  requestedQuote: number;
  inProgressQuote: number;
  receivedQuote: number;
};

const RecentActivityPanel: React.FC<PropTypes> = (props) => (
  <div className={styles.recentActivityPanel}>
    <p>Recent Activity</p>
    <div className={styles.activityPanelContainer}>
      <div className={styles.activityBox}>
        <div className={styles.activityBoxIcon}>
          <img src={quotesRequestedIcon} alt="" />
        </div>
        <div className={styles.activityBoxInformation}>
          <p>{props.requestedQuote}</p>
          <p>Quotes Requested</p>
        </div>
      </div>
      <div className={styles.activityBox}>
        <div className={styles.activityBoxIcon}>
          <img src={quotesInProgressIcon} alt="" />
        </div>
        <div className={styles.activityBoxInformation}>
          <p>{props.inProgressQuote}</p>
          <p>Quotes In-Progress</p>
        </div>
      </div>
      <div className={styles.activityBox}>
        <div className={styles.activityBoxIcon}>
          <img src={quotesReceivedIcon} alt="" />
        </div>
        <div className={styles.activityBoxInformation}>
          <p>{props.receivedQuote}</p>
          <p>Quotes Received</p>
        </div>
      </div>
    </div>
  </div>
);

export default RecentActivityPanel;
