import { configureStore} from '@reduxjs/toolkit'
import cartReducer from '../Features/Cartslice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})