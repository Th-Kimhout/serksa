import {AboutUsSection} from "./Page/About"
import {BenefitsSection} from "./Page/Benefit"
import { Footers } from "./components/Footer"
import {MissionSection} from "./Page/Mission.jsx"
import Header from "./components/Navbar"
import TeamSection from "./Page/Member"
export default function app(){
  return (
    <div>
      <Header/>
      <AboutUsSection/>
      <MissionSection/>
      <BenefitsSection/>
      <TeamSection/>
      <Footers/>
    </div>
  )
};