import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string | null;
  nickname: string | null;
}

const initialState: UserState = {
  email: null,
  nickname: null,
};

type userInfo = {
  user: UserState;
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userInfo>) => {
      state.email = action.payload.user.email;
      state.nickname = action.payload.user.nickname;
    },
    clearUser: (state) => {
      state.email = null;
      state.nickname = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
