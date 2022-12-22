import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav/Nav";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/Contact/Contact";
import Services from "./components/services/Services";
import Industry from "./components/industry/Industry";
import Portfolio from "./components/portfolio/Portfolio";
import Career from "./components/career/Career";
import Blog from "./components/Blog/Blog";
import Clients from "./components/Client/Clients";
import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer";
import ServicePage from "./pages/servicePage/ServicePage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<ServicePage />} />
        <Route exact path="/about/:detail" element={<ServicePage/>}/>
        <Route exact path="/services/:service" element={<ServicePage/>}/>
        <Route exact path="/industries/:industry" element={<ServicePage/>}/>
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<ServicePage />} />
        {/* <Route exact path="/industries" element={<ServicePage />} /> */}
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/careers" element={<Career />} />
        <Route exact path="/blog " element={<Blog />} />
        <Route exact path="/client" element={<Clients />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
