import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../../components/layouts/body/dashboard/Dashboard";
import Overview from "../../components/layouts/body/dashboard/overview/Overview";
import { getUser } from "../../redux/userSlice";

const overview = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <Dashboard>
      <Overview />
    </Dashboard>
  );
};

export default overview;
