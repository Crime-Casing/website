"use client";

import Header from "@/components/header/header";
import HomepageSection from "@/components/homepage/homepage-section";
import path from "path";
import { useEffect, useState } from "react";
// import Cookie from "universal-cookie";

export default function Home() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const cookie = new Cookie(null, { path: __dirname });

  useEffect(() => {}, []);
  return (
    <main>
      <Header />
      <HomepageSection />
    </main>
  );
}
