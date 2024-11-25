import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { noteService } from '../../service/noteService';
import {INote, IDaylik} from "../../interface/note/note"

interface IResNote {
  note: INote[],
  daylik: IDaylik[]
}
const initialState:IResNote = {
  note: [],
  daylik:[],

};

const getListNote = createAsyncThunk<INote[], void, {}>(
  "noteSlice/list",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await noteService.listNote();
      return data;
    } catch (err) {
      const e = err as AxiosError;
      return rejectWithValue(e.request?.data);
    }
  }
);


const getListDaylik = createAsyncThunk<IDaylik[], void, {}>(
  "noteSlice/listDaylik",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await noteService.listDayik();
      return data;
    } catch (err) {
      const e = err as AxiosError;
      return rejectWithValue(e.request?.data);
    }
  }
);

const noteSlice = createSlice({
  name: "noteSlice",
  initialState,
  reducers: {},
  extraReducers: (build) =>
    build

      .addCase(getListNote.fulfilled, (state, { payload }) => {
        state.note = payload;
      })
    
      .addCase(getListDaylik.fulfilled, (state, { payload }) => {
        state.daylik = payload;
      })
    
});

const { reducer: noteReducer, actions } = noteSlice;

const noteActions = {
  ...actions,
  getListNote,
  getListDaylik,
};

export { noteActions, noteReducer };
