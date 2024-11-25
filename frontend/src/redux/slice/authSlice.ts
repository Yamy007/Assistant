import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IResToken, IUser } from "../../interface/auth/auth";
import { authService } from "../../service/authService";

const initialState: IResToken = {
  user: null,
};

const getMe = createAsyncThunk<IUser, void, {}>(
  "authSlice/getMe",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await authService.getMe();
      return data;
    } catch (err) {
      const e = err as AxiosError;
      return rejectWithValue(e.request?.data);
    }
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (build) =>
    build

      .addCase(getMe.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(getMe.rejected, () => {
        console.log("bad Api");
      }),
});

const { reducer: authReducer, actions } = authSlice;

const authActions = {
  ...actions,
  getMe,
};

export { authActions, authReducer };
