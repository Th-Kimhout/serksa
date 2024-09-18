import React from 'react'
import { NavbarComponent } from './NavbarComponent'
import { Outlet } from 'react-router-dom'
import FooterComponent from './FooterComponent'

export default function RootLayout() {
  return (
   <>
   <header>
    <NavbarComponent/>
   </header>
   <main>
    <Outlet/>
   </main>
   <footer>
    <FooterComponent/>
   </footer>
   </>
  )
}
