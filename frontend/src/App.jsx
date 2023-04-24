// import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@picocss/pico";
// US 1 import
import NavBar from "@components/NavBar";
// US 2 Import
import Page2 from "@pages/Page2";

// US 3 import
import CartPage from "@pages/Cart";

// US 4 import
// ContactForm import
import ContactForm from "@components/ContactForm";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <NavBar />
      </div>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/Description" element={<Page2 />} />
        <Route path="/Cart" element={<CartPage />} />
      </Routes>
      <ContactForm />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
