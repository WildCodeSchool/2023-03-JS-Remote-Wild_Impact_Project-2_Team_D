import Carrousel from "@components/Carrousel";
import Header from "@components/Header";
import AllBeersByType from "@components/AllBeersByType";
import About from "@components/About";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <header className="App-header">
      <Header />
      <Carrousel />
      <AllBeersByType title="Nos bières Brunes" cls="bruneBeers" type="Braun" />
      <AllBeersByType
        title="Nos bières Blondes"
        cls="bruneBeers"
        type="Blonde"
      />
      <AllBeersByType title="Nos bières IPA" cls="bruneBeers" type="IPA" />
      <About />
      <Footer />
    </header>
  );
}
