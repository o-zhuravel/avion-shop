import './App.css';
import {Route, Routes} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Our_story from "./Components/Our_story/Our_story";
import Cart from "./Components/Cart/Cart";
import AllProducts from "./Components/Shop/AllProducts/AllProducts";
import Chairs from "./Components/Shop/Chairs/Chairs";
import Ceramics from "./Components/Shop/Ceramics/Ceramics";
import Tables from "./Components/Shop/Tables/Tables";
import Tableware from "./Components/Shop/Tableware/Tableware";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/*' element={<div>Error</div>}/>
          <Route path='/our_story' element={<Our_story/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/all' element={<AllProducts/>}/>
          <Route path='/chairs' element={<Chairs/>}/>
          <Route path='/tables' element={<Tables/>}/>
          <Route path='/tableware' element={<Tableware/>}/>
          <Route path='/ceramics' element={<Ceramics/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
