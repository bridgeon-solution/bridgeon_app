import React from "react";
import Dashboard from "../../components/layouts/body/dashboard/Dashboard";
import UnderWorking from "../../components/commons/Errors/UnderWorking";

const notification = () => {
  return (
    <Dashboard>
      <UnderWorking />
    </Dashboard>
  );
};

export default notification;
