import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  id: number | null;
  username: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  image: string | null;
}

const initialState: UserState = {
  id: null,
  username: null,
  email: null,
  firstName: null,
  lastName: null,
  gender: null,
  image: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserState>) {
      return {...state, ...action.payload};
    },
    clearUserData(state) {
      return initialState;
    },
  },
});

export const {setUserData, clearUserData} = userSlice.actions;
export default userSlice.reducer;
