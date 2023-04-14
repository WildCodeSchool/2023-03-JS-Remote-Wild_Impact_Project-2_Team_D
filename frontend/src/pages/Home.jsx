import Carrousel from "@components/Carrousel";
import Header from "@components/Header";
import HomeBeer from "@components/HomeBeer";
import About from "@components/About";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <header className="App-header">
      <Header />
      <Carrousel />
      <HomeBeer />
      <About />
      <Footer />
    </header>
  );
}
