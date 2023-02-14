import React, { useEffect } from "react";
import Dashboard from "./body/dashboard/Dashboard";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import Welcome from "./body/welcome/Welcome";
import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useState } from "react";
import { confirmLog } from "../../redux/authSlice";
import { getProfile } from "../../redux/async_operations/userAsync";
import { useCookies } from "react-cookie";
// import { useMediaQuery } from "@mui/material";

const DashboardLayout = ({ children, logged }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [children]);
  return (
    <main className={styles.main}>
      {/* {authorized users only can asses dashboard} */}

      <>
        <section className={styles.layout}>
          <Sidebar />
          <div className={styles.body}>
            <Header logged={logged} />

            {children}
          </div>
        </section>
      </>
    </main>
  );
};

const Layouts = ({ children }) => {
  const [logged, setLogging] = useState(false);
  const route = useRouter();

  const authController = useSelector((state) => state.authReducer);
  const userController = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (authController.auth) setLogging(true);
  }, [authController.auth]);

  return (
    <>
      <Head>
        <title>Bridgeon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {Changing layout on route changes} */}

      {logged ? (
        <DashboardLayout logged={logged}>{children}</DashboardLayout>
      ) : (
        <>{route.route.includes("/auth") ? <>{children}</> : <Welcome />}</>
      )}
    </>
  );
};

export default Layouts;
