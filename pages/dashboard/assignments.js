import React from "react";
import UnderWorking from "../../components/commons/Errors/UnderWorking";
import Assignments from "../../components/dashboard/assignments/Assignments";
import Dashboard from "../../components/layouts/body/dashboard/Dashboard";

const assignment = () => {
  return (
    <Dashboard>
      <UnderWorking />
    </Dashboard>
  );
};

export default assignment;
