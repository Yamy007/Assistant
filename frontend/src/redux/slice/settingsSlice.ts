import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type IInitialState = {
  isSettings: boolean;
};
const initialState: IInitialState = {
  isSettings: false,
};

const changeSettings = createAsyncThunk<void, void, {}>(
  "settingsSlice/changeSettings",
  () => {}
);

const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState,
  reducers: {},
  extraReducers: (build) =>
    build.addCase(changeSettings.fulfilled, (state) => {
      state.isSettings = !state.isSettings;
    }),
});

const { reducer: settingsReducer, actions } = settingsSlice;

const settingsActions = {
  ...actions,
  changeSettings,
};

export { settingsActions, settingsReducer };
