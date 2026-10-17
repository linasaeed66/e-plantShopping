
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload
      const existingPlant = state.items.find(
        (item) => item.id === plant.id
      )

      if (existingPlant) {
        existingPlant.quantity += 1
      } else {
        state.items.push({ ...plant, quantity: 1 })
      }
    },

    increaseQuantity: (state, action) => {
      const plant = state.items.find(
        (item) => item.id === action.payload
      )
      if (plant) plant.quantity += 1
    },

    decreaseQuantity: (state, action) => {
      const plant = state.items.find(
        (item) => item.id === action.payload
      )
      if (plant && plant.quantity > 1) {
        plant.quantity -= 1
      } else if (plant) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload
        )
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      )
    },
  },
})

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions

export default cartSlice.reducer
