import {createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit"
import axios from "axios";

export const getContacts = createAsyncThunk("contacts/getContacts", async() => {
    const response  = await axios.get('http://localhost:5000/contacts');
    return response.data;
});

export const saveContact = createAsyncThunk("contacts/saveContact", async({firstName, lastName, age, photo}) => {
    const response  = await axios.post('http://localhost:5000/contacts',{
        firstName, 
        lastName, 
        age, 
        photo
    });
    return response.data;
});

export const updateContact = createAsyncThunk("contacts/updateContact", async({id, firstName, lastName, age, photo}) => {
    const response  = await axios.put(`http://localhost:5000/contacts/${id}`,{
        firstName, 
        lastName, 
        age, 
        photo
    });
    return response.data;
});

export const deleteContact = createAsyncThunk("contacts/deleteContacts", async(id) => {
    await axios.delete(`http://localhost:5000/contacts/${id}`);
    return id;
});

const contactEntity = createEntityAdapter({
    selectId: (contact) => contact.id
});

const contactSlice = createSlice({
    name: "contact",
    initialState:contactEntity.getInitialState(),
    extraReducers:{
        [getContacts.fulfilled] : (state, action) => {
            contactEntity.setAll(state, action.payload);
        },
        [saveContact.fulfilled] : (state, action) => {
            contactEntity.addOne(state, action.payload);
        },
        [updateContact.fulfilled] : (state, action) => {
            contactEntity.updateOne(state, {id: action.payload.id, updates:action.payload});
        },
        [deleteContact.fulfilled] : (state, action) => {
            contactEntity.removeOne(state, action.payload);
        }
    }
});

export const contactSelectors = contactEntity.getSelectors(state => state.contact);
export default contactSlice.reducer;