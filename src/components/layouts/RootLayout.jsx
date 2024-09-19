import React from "react";
import Header from "./components/layouts/Navbar";

import { Outlet } from "react-router-dom";
import { Footers } from "./Footer";

export default function RootLayout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footers />
      </footer>
    </>
  );
}
