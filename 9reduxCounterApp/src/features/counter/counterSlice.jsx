
import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name:'counter',
    initialState: {
        count: 0
    },
    reducers:{
        increment: state => {
            state.count += 1
        },
        decrement: state =>{
            state.count -= 1
        },
        IncrementbyAmount: (state,action) => {
            state.count += action.payload
        }

    }

})

export const {increment,decrement,IncrementbyAmount} = counterSlice.actions

// The purpose of this line is to create a selector function that retrieves the count value from the Redux state in a clean and reusable way. 
// This selector function can be used in components to access the count value without directly accessing the state object.


// export const selectCount = state => state.counter.count


export default counterSlice.reducer