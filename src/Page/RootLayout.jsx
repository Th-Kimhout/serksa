import React from "react";


export default function RootLayout(){
    return (
        <>
        <header>
            <Navbar/>
        </header>
        <main>
            <AboutUsSection/>
            <MissionSection/>
            <TeamSection/>
            <BenefitsSection/>
        </main>
        <footer>
            <Footers/>
        </footer>
        </>
    )
}