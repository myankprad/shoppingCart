import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from "./components/Navbar";
import Shop from "../src/Pages/Shop/Shop"
import Cart from "../src/Pages/Cart/Cart"

function App() {
  return (
    <div className="App">
    <Router >
      <Navbar />
      
      <Routes>
      <Route path="/" element={ <Shop />}/>
      <Route path="/cart" element= {<Cart />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
