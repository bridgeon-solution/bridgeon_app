import { useRouter } from "next/router";
import React, { useEffect } from "react";

const DashboardIndex = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard/overview");
  }, []);

  return(<></>)
};

export default DashboardIndex;
