import { BrowserRouter as Router, Routes, Switch, Route } from "react-router-dom";
import Header from "../layout/Header.js";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Contact from "../pages/Contact.js";
import LoginPage from "../pages/LoginPage.js";
import RegisterPage from "../pages/RegisterPage.js";
import Footer from "../layout/Footer.js";
import "../styles.css";
import NotFound from "../pages/NotFound.js";
import TermsAndConditionsPage from "../pages/TermsAndConditionsPage.js";
import Packages from "./Home/Packages.js";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="*" element={<NotFound />} />
          {/* <Redirect from="*" /> */}   
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
