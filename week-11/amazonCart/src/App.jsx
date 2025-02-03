import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Import BrowserRouter
import Navbar from "./Components/Navbar";
import Checkout from "./Components/Checkout";
import Bigdiv from "./Components/Bigdiv";

const App = () => {
  return (

    <div>

        <Navbar/>
      <Routes>
        <Route path="/" element={<Bigdiv />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
   
  
  );
};

export default App;

