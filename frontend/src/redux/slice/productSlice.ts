import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {
  IResProduct,
  IResSettingsProduct,
} from "../../interface/product/product";
import { productService } from "../../service/productService";
import { IFilter } from "../../interface/product/filter";

export type IProduct = {
  product: IResProduct;
  pending: boolean;
};
export interface IInitialState {
  product: IProduct;
  productSettings: IResSettingsProduct;
  filter: IFilter;
  error: string;
  warning: string;
}
const initialState: IInitialState = {
  product: {
    product: {
      total_items: 0,
      total_page: 1,
      current_page: 1,
    },
    pending: false,
  },
  productSettings: {
    settings: [],
  },
  filter: {},
  error: "",
  warning: "",
};

const getListProduct = createAsyncThunk<IResProduct, string, {}>(
  "productSlice/getListProduct",
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await productService.getListProduct(query);
      return data;
    } catch (err) {
      const e = err as AxiosError;
      return rejectWithValue(e.request?.data);
    }
  }
);
const getListProductByPagination = createAsyncThunk<IResProduct, string, {}>(
  "productSlice/getListProductByPagination",
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await productService.getListProduct(query);
      return data;
    } catch (err) {
      const e = err as AxiosError;
      return rejectWithValue(e.request?.data);
    }
  }
);
const searchProduct = createAsyncThunk<IResProduct, string, {}>(
  "productSlice/searchProduct",
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await productService.searchGetAny(query);
      return data;
    } catch (err) {
      const e = err as AxiosError;
      return rejectWithValue(e.request?.data);
    }
  }
);

const resetStateProduct = createAsyncThunk<void, void, {}>(
  "productSlice/resetProduct",
  async () => {}
);
const getSettingsProduct = createAsyncThunk<IResSettingsProduct, void, {}>(
  "productSlice/getSettingsProduct",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await productService.getSettingsProduct();
      return data;
    } catch (err) {
      const e = err as AxiosError;
      return rejectWithValue(e.request?.data);
    }
  }
);
const updateSettingsProduct = createAsyncThunk<
  IResSettingsProduct,
  IResSettingsProduct,
  {}
>(
  "productSlice/updateSettingsProduct",
  async (dataSettings, { rejectWithValue }) => {
    try {
      const { data } = await productService.updateSettingsProduct(dataSettings);
      return data;
    } catch (err) {
      const e = err as AxiosError;
      return rejectWithValue(e.request?.data);
    }
  }
);
const getFilterProductField = createAsyncThunk<IFilter, string, {}>(
  "productSlice/getProductFilter",
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await productService.getFilterProductField(query);
      return data;
    } catch (err) {
      const e = err as AxiosError;
      return rejectWithValue(e.request?.data);
    }
  }
);

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (build) =>
    build
      .addCase(getListProduct.fulfilled, (state, { payload }) => {
        state.product.product.current_page = payload.current_page;
        state.product.product.total_items = payload.total_items;
        state.product.product.total_page = payload.total_page;
        // state.product.product.data = state.product.product.data
        //   ? state.product.product.data.concat(payload.data ?? [])
        //   : payload.data;
        state.product.product.data = payload.data;
        state.product.pending = false;
      })
      .addCase(getListProductByPagination.fulfilled, (state, { payload }) => {
        state.product.product.current_page = payload.current_page;
        state.product.product.total_items = payload.total_items;
        state.product.product.total_page = payload.total_page;
        state.product.product.data = state.product.product.data
          ? state.product.product.data.concat(payload.data ?? [])
          : payload.data;
        state.product.pending = false;
      })
      .addCase(getListProduct.pending, (state) => {
        state.product.pending = true;
      })
      .addCase(getListProductByPagination.pending, (state) => {
        state.product.pending = true;
      })

      .addCase(getListProduct.rejected, (state) => {
        state.error =
          "Error Api:  Ми не змогли отримати товари, зверніться в тех підтримку";
      })
      .addCase(getSettingsProduct.fulfilled, (state, { payload }) => {
        state.productSettings.settings = payload.settings?.sort(
          (x, y) => x.order - y.order
        );
      })
      .addCase(updateSettingsProduct.fulfilled, (state, { payload }) => {
        state.productSettings.settings = payload.settings?.sort(
          (x, y) => x.order - y.order
        );
        state.product.pending = false;
      })
      .addCase(updateSettingsProduct.pending, (state) => {
        state.product.pending = true;
      })
      .addCase(getSettingsProduct.rejected, (state) => {
        state.error =
          "Error Api: Ми не змогли отримати ваші налаштування таблиць, зверніться в тех підтримку";
      })
      .addCase(resetStateProduct.fulfilled, (state) => {
        state.product.product.current_page = 1;
        state.product.product.total_items = 0;
        state.product.product.total_page = 1;
        state.product.product.data = [];
      })
      .addCase(getFilterProductField.fulfilled, (state, { payload }) => {
        state.filter = payload;
      })
      .addCase(getFilterProductField.rejected, (state) => {
        state.warning =
          "Error Api: Ми не змогли отримати дані для швидкого пошуку, зверніться в тех підтримку";
      }),
});

const { reducer: productReducer, actions } = productSlice;

const productActions = {
  ...actions,
  getListProduct,
  getSettingsProduct,
  resetStateProduct,
  getFilterProductField,
  updateSettingsProduct,
  searchProduct,
  getListProductByPagination,
};

export { productActions, productReducer };
