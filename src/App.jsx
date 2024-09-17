import "./App.css";
import { Footer } from "./components/Footer.jsx";
import Header from "./components/Navbar.jsx";
import { Homepage } from "./pages/Homepage.jsx";

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
