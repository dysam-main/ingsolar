import './App.css';
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AboutUs from "./views/AboutUs"
import Contact from "./views/Contact"
import Faqs from "./views/Faqs"
import Main from "./views/Main"
import Products from "./views/Products"
import Services from "./views/Services"
import Works from "./views/Works"



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/Nosotros" element={<AboutUs/>}/>
        <Route path="/Contacto" element={<Contact/>}/>
        <Route path="/Preguntas" element={<Faqs/>}/>
        <Route path="/Productos" element={<Products/>}/>
        <Route path="/Servicios" element={<Services/>}/>
        <Route path="/Trabajos" element={<Works/>}/>
        <Route path="/" element={<Main/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
