import "./App.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax.jsx/parallax";
import Portfolio from "./components/portofolio/Portfolio";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Test from "./Test";
import { motion } from 'framer-motion';

const App = () => {
  return( 
  <div>

    <section id="Homepage">
      <Navbar />
      <Hero />

    </section>
    <section id="Services"><Parallax type="services" />
    </section>
    <section ><Services />
    </section>
    <section id="Portfolio"><Parallax type="portfolio" />
    </section>
    <Portfolio />

    <section id="Contact">
      <Contact />
    </section>


  </div>
  );
};

export default App;
