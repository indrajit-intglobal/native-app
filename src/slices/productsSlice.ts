import { createSlice } from '@reduxjs/toolkit'
import demo from '../data/products'

const productsSlice = createSlice({
  name: 'products',
  initialState: { list: demo },
  reducers: {}
})

export default productsSlice.reducer
