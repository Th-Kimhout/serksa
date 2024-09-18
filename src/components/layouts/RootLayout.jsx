import React from "react";
import { NavbarComponent } from "./Navbar";
import { FooterComponent } from "./Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <Outlet />
      <FooterComponent />
    </>
  );
}
