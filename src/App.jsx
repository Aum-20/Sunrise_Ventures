import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Realestate from "./pages/Realestate";
import Thankyou from "./pages/Thankyou";
import Workinprogress from "./pages/Workinprogress";
import Admin from "./pages/Admin";
import AdminContactus from "./pages/AdminContactus";
import AdminRealestate from "./pages/AdminRealestate";
import Signin from "./pages/Signin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/realestate" element={<Realestate />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/work-in-progress" element={<Workinprogress />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/contactus" element={<AdminContactus />} />
        <Route path="/admin/realestate" element={<AdminRealestate />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}
