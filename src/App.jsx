import AboutUsSection from "./components/About";
import BenefitsSection from "./components/Benefit";
import Footer from "./components/Footer";
import TeamSection from "./components/Member";
import MissionSection from "./components/mission";
import Header from "./components/Navbar";
export default function app() {
  return (
    <div>
      <Header />
      <AboutUsSection />
      <MissionSection />
      <BenefitsSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
