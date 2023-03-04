import React from "react";
import UnderWorking from "../../components/commons/Errors/UnderWorking";
import Dashboard from "../../components/layouts/body/dashboard/Dashboard";
import Settings from "../../components/layouts/body/dashboard/settings/Settings";

const settings = () => {
  return (
    <Dashboard>
      <Settings />
    </Dashboard>
  );
};

export default settings;
