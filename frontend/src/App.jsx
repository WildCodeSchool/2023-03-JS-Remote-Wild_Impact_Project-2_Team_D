
// import Home from "./pages/Home";

import "@picocss/pico";
// US 1 import

// US 2 Import
import Page2 from "./pages/Page2";
// US 3 import
import CartPage from "@pages/Cart";
// US 4 import

// ContactForm import
import ContactForm from "@components/ContactForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/** US 1 Page */}
      {/** US 2 Page */}
      <Page2 />
      {/** US 3 Page */}
      <CartPage />
      {/** US 4 Page */}
      <ContactForm />
      {/* <p>coucou</p> */}
    </div>
  );
}

export default App;
