import React from 'react'
import styles from "../../styles/Home.module.scss";
import Dashboard from "../../components/layouts/body/dashboard/Dashboard";                                

import Sidebar from "../../components/layouts/sidebar/Sidebar";
import { useRouter } from 'next/router';
const index = () => {
  const path = useRouter()
  console.log(path)
  return (
    <section className={styles.body_layout}>
      <Sidebar />
      <Dashboard>
        northing
      </Dashboard>
    </section>
  )
}

export default index