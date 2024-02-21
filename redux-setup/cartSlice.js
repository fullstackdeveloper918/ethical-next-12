import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      if (existingItem) {
        existingItem.quantity += newItem.quantity
      } else {
        state.items.push(newItem)
      }
    },
    removeItem: (state, action) => {
      const idToRemove = action.payload
      state.items = state.items.filter((item) => item.id !== idToRemove)
    },
    incrementQuantity: (state, action) => {
      const idToUpdate = action.payload
      const itemToUpdate = state.items.find((item) => item.id === idToUpdate)
      if (itemToUpdate) {
        itemToUpdate.quantity += 1
      }
    },
    decrementQuantity: (state, action) => {
      const idToUpdate = action.payload
      const itemToUpdate = state.items.find((item) => item.id === idToUpdate)
      if (itemToUpdate && itemToUpdate.quantity > 1) {
        itemToUpdate.quantity -= 1
      }
    },
  },
})

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions
export default cartSlice.reducer

// import { useSelector, useDispatch } from 'react-redux';
// import { addItem, removeItem, incrementQuantity, decrementQuantity } from './cartSlice';

// const YourComponent = () => {
//   const cartItems = useSelector(state => state.cart.items);
//   const dispatch = useDispatch();

//   // Dispatch actions to modify the cart
//   const handleAddToCart = (item) => {
//     dispatch(addItem(item));
//   };

//   const handleRemoveFromCart = (itemId) => {
//     dispatch(removeItem(itemId));
//   };

//   const handleIncrementQuantity = (itemId) => {
//     dispatch(incrementQuantity(itemId));
//   };

//   const handleDecrementQuantity = (itemId) => {
//     dispatch(decrementQuantity(itemId));
//   };

// <ul>
// {cartItems.map(item => (
//   <li key={item.id}>
//     {item.name} - Quantity: {item.quantity}
//     <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
//     <button onClick={() => handleDecrementQuantity(item.id)}>-</button>
//     <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
//   </li>
// ))}
// </ul>
