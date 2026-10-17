
import { useSelector } from 'react-redux'
import { Link, Routes, Route } from 'react-router-dom'
import ProductList from './ProductList'
import AboutUs from './AboutUs'
import Cart from './Cart'
import './App.css'

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">BRING NATURE HOME</p>
          <h1>Find Your Perfect Houseplant</h1>
          <p>
            Transform your space into a peaceful green sanctuary
            with beautiful plants selected just for you.
          </p>
          <Link to="/plants" className="primary-button">
            Get Started
          </Link>
        </div>
      </section>

      <AboutUs />
    </>
  )
}

function App() {
  const cartItems = useSelector((state) => state.cart.items)

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <div className="nursery">
      <nav className="navbar">
        <Link to="/" className="brand">
          🌿 Paradise Nursery
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <footer className="footer">
        <p>© 2026 Paradise Nursery. Grow with us. 🌿</p>
      </footer>
    </div>
  )
}

export default App
