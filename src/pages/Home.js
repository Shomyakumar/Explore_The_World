import { useRef } from "react";

import Hero from "../components/Hero"
import toursdata from "../data/toursdata"
import Cards from "../components/Cards"
import Footer from "../components/Footer";
function Home() {
  const cardsRef = useRef(null);
    return (
      <div>
        <Hero cardsRef={cardsRef}/>
        <Cards toursdata={toursdata}  ref={cardsRef}/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;