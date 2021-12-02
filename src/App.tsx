import React from "react";

//importing components
import Main from "./components/dashboard/Main/index";
import Sidebar from "./components/dashboard/Sidebar/index";

//importing styles
import styles from "./styles/dashboard/App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
