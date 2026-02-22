import './App.css'
import Header from "./components/Header.tsx";
import Hero from "./components/Hero";
import Services from "./components/Services.tsx";
import ServicesCards from "./components/Services-cards.tsx";



function App() {
  return (
    <>
        <Header/>
        <Hero/>
        <Services/>
        <ServicesCards/>
    </>
  )
}

export default App
