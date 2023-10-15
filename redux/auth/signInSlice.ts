import { createSlice } from "@reduxjs/toolkit";
import { signIn} from "./thunkAction";
interface IState {
  loading: "failed" | "loading" | "successful" | "idle";
}
const initialState: IState = {
  loading: "idle",
};
const signInSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signIn.pending, (state) => {
      return { ...state, loading: "loading" };
    });

    builder.addCase(signIn.fulfilled, (state) => {
      return { ...state, loading: "successful" };
      // Add user to the state array
    });
    builder.addCase(signIn.rejected, (state) => {
      return { ...state, loading: "failed" };

      // Add user to the state array
    });
  },
});

export const SignInReducer = signInSlice.reducer;
