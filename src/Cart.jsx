
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import './Cart.css'

function Cart() {
  const cartItems = useSelector((state) => state.cart.items)

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <main className="cart-page">
      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty. Let’s find some plants!</p>
          <Link to="/plants" className="cart-button">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <p className="cart-summary">
            Total items: {totalQuantity}
          </p>

          <div className="cart-items">
            {cartItems.map((plant) => (
              <CartItem key={plant.id} plant={plant} />
            ))}
          </div>

          <div className="cart-total">
            <h2>
              Total: ₦{totalCost.toLocaleString()}
            </h2>

            <div className="cart-actions">
              <Link to="/plants" className="cart-button secondary-button">
                Continue Shopping
              </Link>

              <button
                className="cart-button"
                onClick={() => alert('Checkout Coming Soon!')}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  )
}

export default Cart
