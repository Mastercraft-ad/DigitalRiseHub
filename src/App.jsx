import "./App.css";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Services from "./component/Services/Services";
import Cta from "./component/Cta/Cta";
import WhyChooseUs from "./component/WhyChooseUs/WhyChooseUs";

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
