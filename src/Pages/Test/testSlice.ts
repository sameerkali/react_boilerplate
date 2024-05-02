import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const getData = createAsyncThunk('testSlice/getData', async () => {
  const uri = 'https://jsonplaceholder.typicode.com/posts';
  try {
    const response = await fetch(uri);
    const data = await response.json();
    console.log('this is data',data, 'this is data');
    return data; 
  } catch (error) {
    throw error; 
  }
});

interface TestState {
  number: string;
  getData: any;
}

const initialState: TestState = {
  number: '',
  getData: null,
};

const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    setNumber: (state, action: PayloadAction<{ number: string }>) => {
      state.number = action.payload.number;
    },
  }
});

export const { setNumber } = testSlice.actions;

export default testSlice.reducer;
