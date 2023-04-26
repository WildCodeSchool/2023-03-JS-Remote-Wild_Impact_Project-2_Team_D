import "@picocss/pico";
import Home from "@pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "@components/NavBar";
import Page2 from "@pages/Page2";
import CartPage from "@pages/Cart";
import ContactForm from "@components/ContactForm";
import Footer from "@components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
         <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Description" element={<Page2 />} />
        <Route path="/Cart" element={<CartPage />} />
      </Routes>
      <ContactForm />
      <Footer />
    </Router>
  );
}

export default App;
