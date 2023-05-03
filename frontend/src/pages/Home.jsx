import Carrousel from "@components/Carrousel";
import AllBeersByType from "@components/AllBeersByType";
import About from "@components/About";

export default function Home({ addToCart }) {
  return (
    <header className="App-header">
      <Carrousel />
      <AllBeersByType
        title="Nos bières Brunes"
        cls="bruneBeers"
        type="Braun"
        addToCart={addToCart}
      />
      <AllBeersByType
        title="Nos bières Blondes"
        cls="bruneBeers"
        type="Blonde"
        addToCart={addToCart}
      />
      <AllBeersByType
        title="Nos bières IPA"
        cls="bruneBeers"
        type="IPA"
        addToCart={addToCart}
      />
      <About />
    </header>
  );
}
