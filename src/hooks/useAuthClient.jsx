"use client";

import { whoIAm } from "@/app/actions";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function useAuthClient() {
  const pathname = usePathname();
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    const user = await whoIAm();
    setUserData(user);
  };

  useEffect(() => {
    getUserData();
  }, [pathname]);

  return { userData };
}

export default useAuthClient;
