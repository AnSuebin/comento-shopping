import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Basket from './pages/Basket'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
