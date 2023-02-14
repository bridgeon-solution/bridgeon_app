import { useEffect } from "react";
import { useRouter } from "next/router";
import { AddAlarmSharp, DiscFull } from "@mui/icons-material";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard/overview");
  }, []);
  return <>Welcome</>;
}
