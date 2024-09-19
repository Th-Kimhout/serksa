import "./App.css";
import FooterComponent from "./components/layouts/FooterComponent";
import { NavbarComponent } from "./components/layouts/NavbarComponent";
import CoursePage from "./pages/product/CoursePage";
import { getAllCourses } from "./services/courses/courseFetch";
export default function App() {
  getAllCourses();

  return (
    <div>
      <Header />
      <AboutUsSection />
      <MissionSection />
      <BenefitsSection />
      <TeamSection />
      <Footer />
      <NavbarComponent />
      <CoursePage />
      <FooterComponent />
    </div>
  );
}
