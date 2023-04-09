import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Newsletter from "./components/Newsletter";
import { Routes,Route } from "react-router-dom";

function App() {


  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App;
