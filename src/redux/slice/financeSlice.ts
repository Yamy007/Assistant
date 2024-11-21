import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IResTransaction } from "../../interface/finance/finance";
import { financeService } from "../../service/financeService";
import { IResSettingsProduct } from "../../interface/product/product";

export type IInitialState = {
  transaction: IResTransaction;
  settings: IResSettingsProduct;
};
const initialState: IInitialState = {
  transaction: {
    total_items: 0,
    total_page: 1,
    current_page: 1,
    data: [],
  },
  settings: {},
};

const getListTransaction = createAsyncThunk<IResTransaction, void, {}>(
  "fianceSlice/getTransactionList",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await financeService.getTransactionList();
      return data;
    } catch (err) {
      const e = err as AxiosError;
      return rejectWithValue(e.request?.data);
    }
  }
);
const getSettingsTransaction = createAsyncThunk<IResSettingsProduct, void, {}>(
  "fianceSlice/getSettingsTransaction",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await financeService.getSettingsTransaction();
      return data;
    } catch (err) {
      const e = err as AxiosError;
      return rejectWithValue(e.request?.data);
    }
  }
);
const updateSettingsTransaction = createAsyncThunk<
  IResSettingsProduct,
  IResSettingsProduct,
  {}
>(
  "fianceSlice/updateSettingsTransaction",
  async (dataSettings, { rejectWithValue }) => {
    try {
      const { data } = await financeService.updateSettingsProduct(dataSettings);
      return data;
    } catch (err) {
      const e = err as AxiosError;
      return rejectWithValue(e.request?.data);
    }
  }
);

const fianceSlice = createSlice({
  name: "fianceSlice",
  initialState,
  reducers: {},
  extraReducers: (build) =>
    build
      .addCase(getListTransaction.fulfilled, (state, { payload }) => {
        state.transaction.current_page = payload.current_page;
        state.transaction.total_items = payload.total_items;
        state.transaction.total_page = payload.total_page;
        state.transaction.data = payload.data;
      })
      .addCase(getSettingsTransaction.fulfilled, (state, { payload }) => {
        state.settings.settings = payload.settings?.sort(
          (x, y) => x.order - y.order
        );
      })
      .addCase(updateSettingsTransaction.fulfilled, (state, { payload }) => {
        state.settings.settings = payload.settings?.sort(
          (x, y) => x.order - y.order
        );
      }),
});

const { reducer: financeReducer, actions } = fianceSlice;

const financeActions = {
  ...actions,
  getListTransaction,
  getSettingsTransaction,
  updateSettingsTransaction,
};

export { financeActions, financeReducer };
