import './App.css'
import { FooterComponent } from './components/Layouts/FooterComponent.jsx'
import NavbarComponent from './components/Layouts/NavbarComponent.jsx'
import { Homepage } from './pages/Homepage.jsx'

function App() {

  return (
    <>
    <NavbarComponent/>
    <Homepage/>
    <FooterComponent/>
    </>
  )
}

export default App
