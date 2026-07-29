import "./App.css";
import Header from "/src/component/Header/Header";
import Hero from "/src/component/Hero/Hero";
import Services from "/src/component/Services/Services";
import Cta from "/src/component/Cta/Cta";
import WhyChooseUs from "/src/component/WhyChooseUs/WhyChooseUs";

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
