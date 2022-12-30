import React from "react";
import Dashboard from "../../components/layouts/body/dashboard/Dashboard";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import styles from "../../styles/Home.module.scss";


const overview = () => {
  return (
    <section className={styles.body_layout}>
      <Sidebar />
      <Dashboard>northing</Dashboard>
    </section>
  );
};

export default overview;
