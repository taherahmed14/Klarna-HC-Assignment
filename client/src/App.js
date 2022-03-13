import './App.css';
import { Products } from './components/products';
import { Navbar } from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import { ProductDetail } from './components/productDetail';
 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path='/products/:id' element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
