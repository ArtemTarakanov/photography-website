import './App.css'
import Header from "./components/Header.tsx";
import Hero from "./components/Hero";
import Services from "./components/Services.tsx";
import ServicesCards from "./components/Services-cards.tsx";
import Store from "./components/Store.tsx";
import Contacts from "./components/Contacts.tsx";



function App() {
  return (
    <>
        <Header/>
        <Hero/>
        <Services/>
        <ServicesCards/>
        <Store/>
        <Contacts/>
    </>
  )
}

export default App
