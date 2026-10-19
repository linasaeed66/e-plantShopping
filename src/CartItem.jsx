
import { useDispatch } from 'react-redux'
import { updateQuantity, removeItem } from './CartSlice'

function CartItem({ plant }) {
  const dispatch = useDispatch()

  const handleQuantityChange = (quantity) => {
    dispatch(updateQuantity({ id: plant.id, quantity }))
  }

  return (
    <div className="cart-item">
      <img
        src={plant.image}
        alt={plant.name}
        className="cart-item-image"
      />

      <div className="cart-item-details">
        <h3>{plant.name}</h3>

        <p>
          Unit price: ₦{plant.price.toLocaleString('en-NG')}
        </p>

        <p>
          Subtotal: ₦
          {(plant.price * plant.quantity).toLocaleString('en-NG')}
        </p>

        <div className="quantity-controls">
          <button
            onClick={() => handleQuantityChange(plant.quantity - 1)}
            aria-label={`Decrease ${plant.name} quantity`}
          >
            −
          </button>

          <span>{plant.quantity}</span>

          <button
            onClick={() => handleQuantityChange(plant.quantity + 1)}
            aria-label={`Increase ${plant.name} quantity`}
          >
            +
          </button>
        </div>

        <button
          className="remove-button"
          onClick={() => dispatch(removeItem(plant.id))}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
