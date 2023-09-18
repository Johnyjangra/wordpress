import "./App.css";
import Agile from "./components/Agile";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import FullStar from "./components/FullStar";
import HaveYou from "./components/HaveYou";
import Hero from "./components/Hero";
import Integer from "./components/Integer";
import LongTerm from "./components/LongTerm";
import NavBar from "./components/NavBar";
import Preload from "./components/Preload";
import Success from "./components/Success";
import TopBottm from "./components/TopBottm";
import Wordpress from "./components/Wordpress";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Preload />
        <NavBar />
        <Hero />
        <Feature />
        <Integer />
        <Wordpress />
        <LongTerm />
        <Agile />
        <FullStar />
        <Success />
        <HaveYou />
        <Footer />
        <TopBottm />
      </div>
    </>
  );
}

export default App;
