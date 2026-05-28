import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import BentoSecion from "./components/BentoSection"
import RoomsSection from "./components/RoomsSection"
import Galery from "./components/Galery"
import Ubicacion from "./components/Ubicacion"
import Us from "./components/Us"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Stats from "./components/Stats"
import FAQ from "./components/FAQ"
import WhatsAppButton from "./components/WhatsAppButton"

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <RoomsSection />
      <Galery />
      <Ubicacion />
      <Us />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App