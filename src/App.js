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
import DynamicPage from "./pages/dynamicpage/DynamicPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<DynamicPage />} />
        <Route exact path="/about/:detail" element={<DynamicPage/>}/>
        <Route exact path="/services/:service" element={<DynamicPage/>}/>
        <Route exact path="/industries/:industry" element={<DynamicPage/>}/>
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<DynamicPage />} />
        {/* <Route exact path="/industries" element={<DynamicPage />} /> */}
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
