'use client'; 

import Image from "next/image";
import { useState } from "react";
import SystemNotification from "./systemNotification";
import WelcomeUser from "./welcomeUser";

export default function AnnounceMainBoard() {


  const [activeDateIndex, setActiveDateIndex] = useState(0)

   return (
    <div className="w-full p-4 mt-6 flex flex-col items-center gap-5">
        <WelcomeUser />
        <SystemNotification />
    </div>
  );
}
