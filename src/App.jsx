import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Cta from "./components/CTA/Cta";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

function App() {
  return (
    <>
    {/* Moses Task */}
      <Header />
      <Hero />

    {/* Paul Task */}
      <Services />

      {/* Pascal Task */}
      {<WhyChooseUs />}

      {/* Dennis Task */}
    
      <Cta />

    </>
  );
}

export default App;
