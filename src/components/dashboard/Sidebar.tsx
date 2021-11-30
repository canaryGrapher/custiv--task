import React from "react";

//importing assets
import { projects, messages, suppliers, clients } from "../../assets";

//importing styles
import styles from "../../styles/dashboard/Sidebar.module.scss";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <table>
        <tr className={`${styles.sidebarOptions} ${styles.selected}`}>
          <td></td>
          <td>
            <p>Quotes</p>
          </td>
        </tr>
        <tr className={styles.sidebarOptions}>
          <td>
            <img src={projects} alt="" />
          </td>
          <td>
            <p>Projects</p>
          </td>
        </tr>
        <tr className={styles.sidebarOptions}>
          <td>
            <img src={messages} alt="" />
          </td>
          <td>
            <p>Messages</p>
          </td>
        </tr>
        <tr className={styles.sidebarOptions}>
          <td>
            <img src={suppliers} alt="" />
          </td>
          <td>
            <p>Suppliers</p>
          </td>
        </tr>
        <tr className={styles.sidebarOptions}>
          <td>
            <img src={clients} alt="" />
          </td>
          <td>
            <p>Clients</p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Sidebar;
