import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type User = { id: string; name: string; email: string }
type AuthState = { user: User | null }

const initialState: AuthState = { user: null }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ email: string; password: string }>){
      // demo auth
      state.user = { id: 'u1', name: 'Gym Lover', email: action.payload.email }
    },
    register(state, action: PayloadAction<{ name: string; email: string; password: string }>){
      state.user = { id: 'u1', name: action.payload.name, email: action.payload.email }
    },
    logout(state){
      state.user = null
    }
  }
})

export const { login, register, logout } = authSlice.actions
export default authSlice.reducer
