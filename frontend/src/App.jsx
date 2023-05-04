import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "@picocss/pico";
import Home from "@pages/Home";
import Page2 from "@pages/Page2";
import Header from "@components/Header";
import CartPage from "@pages/Cart";
import ContactForm from "@components/ContactForm";
import Footer from "@components/Footer";
import Toast from "@components/Toast";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [toastStatus, setToastStatus] = useState({
    isVisible: false,
    message: "",
  });

  const triggerToast = (message) => {
    setToastStatus({
      isVisible: true,
      message,
    });

    setTimeout(() => {
      setToastStatus({
        isVisible: false,
        message: "",
      });
    }, 2000);
  };

  const addToCart = (id, quantity) => {
    // On cherche un article existant dans le panier
    const article = cart.find((articleInCart) => articleInCart.id === id);

    if (article) {
      // Si on a trouvé un article on ajoute la quantité
      setCart([
        ...cart.filter((articleInCart) => articleInCart.id !== id),
        {
          ...article,
          quantity: article.quantity + quantity,
        },
      ]);
    } else {
      // Si on a pas trouvé d'article on l'ajoute
      setCart([
        ...cart,
        {
          id,
          quantity,
          createdAt: new Date(),
        },
      ]);
    }

    triggerToast("Article ajouté !");
  };

  const removeFromCart = (id, quantity) => {
    // On cherche un article existant dans le panier
    const article = cart.find((articleInCart) => articleInCart.id === id);

    if (article) {
      // Si on a trouvé un article on retire la quantité

      const articleToSubtract = {
        ...article,
        quantity: article.quantity - quantity,
      };

      if (articleToSubtract.quantity < 0) {
        articleToSubtract.quantity = 0;
      }

      setCart([
        ...cart.filter((articleInCart) => articleInCart.id !== id),
        articleToSubtract,
      ]);
    }
  };

  const deleteFromCart = (id) => {
    setCart(cart.filter((articleInCart) => articleInCart.id !== id));
  };

  return (
    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
          path="/Description/:id"
          element={<Page2 addToCart={addToCart} />}
        />
        <Route
          path="/Cart"
          element={
            <CartPage
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              deleteFromCart={deleteFromCart}
              cart={cart}
            />
          }
        />
      </Routes>
      <ContactForm />
      <Footer />
      <Toast isVisible={toastStatus.isVisible} message={toastStatus.message} />
    </Router>
  );
}

export default App;
