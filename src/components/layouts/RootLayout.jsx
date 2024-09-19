import React from "react";
import { NavbarComponent } from "./Navbar";
import { FooterComponent } from "./Footer";
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
