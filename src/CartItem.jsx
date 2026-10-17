
import { useDispatch } from 'react-redux'
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from './CartSlice'

function CartItem({ plant }) {
  const dispatch = useDispatch()

  return (
    <div className="cart-item">
      <img
        src={plant.image}
        alt={plant.name}
        className="cart-item-image"
      />

      <div className="cart-item-details">
        <h3>{plant.name}</h3>
        <p>Unit price: ₦{plant.price.toLocaleString()}</p>
        <p>
          Subtotal: ₦
          {(plant.price * plant.quantity).toLocaleString()}
        </p>

        <div className="quantity-controls">
          <button
            onClick={() => dispatch(decreaseQuantity(plant.id))}
            aria-label={`Decrease ${plant.name} quantity`}
          >
            −
          </button>

          <span>{plant.quantity}</span>

          <button
            onClick={() => dispatch(increaseQuantity(plant.id))}
            aria-label={`Increase ${plant.name} quantity`}
          >
            +
          </button>
        </div>

        <button
          className="remove-button"
          onClick={() => dispatch(removeFromCart(plant.id))}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
