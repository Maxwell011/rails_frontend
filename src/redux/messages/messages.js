import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions String
const GET_MSG = 'get-messages';

// Action Thunk
export const retrieveMessages = createAsyncThunk(GET_MSG, async () => {
  const res = await fetch('http://127.0.0.1:3000/api/v1/messages');
  const { text } = await res.json();
  return text;
});

// Reducers
const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
  },
  extraReducers: (builder) => {
    builder.addCase(retrieveMessages.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.messages[0] = action.payload;
    });
  },
});

export default messagesSlice.reducer;
