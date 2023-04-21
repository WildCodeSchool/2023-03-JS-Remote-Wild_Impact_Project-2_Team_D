import "@picocss/pico";
// US 1 import
import Home from "@pages/Home";
// US 2 Import
import Page2 from "@pages/Page2";

// US 3 import
import CartPage from "@pages/Cart";

// ContactForm import
import ContactForm from "@components/ContactForm";

// US 4 import
import Footer from "@components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      {/** US 1 Page */}
      {/** US 2 Page */}
      <Page2 />
      {/** US 3 Page */}
      <CartPage />
      {/** US 4 Page */}
      <ContactForm />
      {/* <p>coucou</p> */}
      <Footer />
    </div>
  );
}

export default App;
