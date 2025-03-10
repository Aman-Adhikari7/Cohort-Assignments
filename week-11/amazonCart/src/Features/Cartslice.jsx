import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:[]
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addtocart:(state,action)=>{
            const item= action.payload
            const existingItem = state.items.find(i => i.id=== item.id)

            if(existingItem){
                if(existingItem.quantity < item.stock){
                    existingItem.quantity += 1
                }
            }else{

                state.items.push({...item,quantity:1})
            }

        },

        removefromcart:(state,action)=>{
            state.items = state.items.filter(item => item.id !== action.payload)
        },

        increaseQuantity: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item && item.quantity < item.stock) {
              item.quantity += 1;
            }
          },
          decreaseQuantity: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item && item.quantity > 1) {
              item.quantity -= 1;
            }
          },

         clearCart:(state)=>{
            state.items=[];
         }



    }
})


export const {addtocart ,removefromcart, increaseQuantity, decreaseQuantity,clearCart} = cartSlice.actions

export default cartSlice.reducer