import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import BentoSecion from "./components/BentoSection"
import RoomsSection from "./components/RoomsSection"
import Footer from "./components/Footer"
import Stats from "./components/Stats"
import WhatsAppButton from "./components/WhatsAppButton"

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Stats />
      <RoomsSection />
      <BentoSecion />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App