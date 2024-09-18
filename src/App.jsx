import AboutUsSection from "./pages/aboutpage/AboutPage"; 
import Header from "./components/layouts/Navbar";
import  { Members } from "./pages/aboutpage/Member";
import { Footers } from "./components/layouts/Footer";
export default function app() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <AboutUsSection />
        <Members />
      </section>
      <footer>
        <Footers/>
      </footer>
    </>
  );
}
