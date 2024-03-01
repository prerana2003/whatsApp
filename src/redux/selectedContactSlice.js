import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedContact : ""
}

export const selectedContactSlice= createSlice({
    name: 'SelectedContacts',
    initialState,
    reducers:{
        setSelectedContact: (state, action) => {
            state.selectedContact = action.payload
        },
    }
})

export const {setSelectedContact} = selectedContactSlice.actions

export default selectedContactSlice.reducer