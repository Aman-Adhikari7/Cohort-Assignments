import Features from "./Componenets/Features2";
import Footer from "./Componenets/Footer";
import Hero1 from "./Componenets/Hero1";
import Hero3 from "./Componenets/Hero3";
import FAQ from "./Componenets/hero4";

import Navbar from "./Componenets/Navbar";

const App = () => {
  return (
    <div className=" flex flex-col items-center ml-6 mr-6 ">
      <Navbar/>
      <Hero1/>
      <Features/>
      <Hero3/>
      <FAQ/>
      <Footer/>
          
    </div>
  );
};

export default App;
