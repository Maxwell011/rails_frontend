import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Actions String
const GET_MSG = "get-messages";

// Action Thunk
export const retrieveMessages = createAsyncThunk(GET_MSG, async () => {
  const res = await fetch("api/v1/messages");
  const  {message}  = await res.json();
  return message;
});

// Reducers
const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
  },
  extraReducers: (builder) => {

    builder.addCase(retrieveMessages.fulfilled, (state, action) => {
      state.messages[0] = action.payload;
    });
  },
});

export default messagesSlice.reducer;
