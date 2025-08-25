import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartItem = { id: string; title: string; price: number; image: string; qty: number }
type CartState = { items: CartItem[] }

const initialState: CartState = { items: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>){
      const idx = state.items.findIndex(i => i.id === action.payload.id)
      if(idx >= 0){
        state.items[idx].qty += action.payload.qty
      } else {
        state.items.push(action.payload)
      }
    },
    removeFromCart(state, action: PayloadAction<string>){
      state.items = state.items.filter(i => i.id !== action.payload)
    },
    updateQty(state, action: PayloadAction<{ id: string; qty: number }>){
      const item = state.items.find(i => i.id === action.payload.id)
      if(item){
        item.qty = Math.max(1, action.payload.qty)
      }
    },
    clearCart(state){
      state.items = []
    }
  }
})

export const { addToCart, removeFromCart, updateQty, clearCart } = cartSlice.actions
export default cartSlice.reducer
