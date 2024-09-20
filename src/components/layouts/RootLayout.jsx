import React from "react";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import { Outlet } from "react-router-dom";
import App from "../../App";
import ChatHead from "../chatBot/ChatHead";

export default function RootLayout() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main>
        <App />
        <Outlet />
      </main>

      <ChatHead />

      <FooterComponent />
    </>
  );
}
