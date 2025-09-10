import { createSlice } from "@reduxjs/toolkit"

const dataSlice = createSlice({
    name: "data",
    initialState: {
        value: []
    },
    reducers: {
        generate: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { generate } = dataSlice.actions
export default dataSlice.reducer