import './App.css';
import { Navigate, Route, Routes } from "react-router";
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
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Faqs" element={<Faqs/>}/>
        <Route path="/Main" element={<Main/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Works" element={<Works/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
