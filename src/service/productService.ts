import { urls } from "../constant";
import {
  IResBrand,
  IResCategory,
  IResModel,
} from "../interface/product/category";
import { IFilter } from "../interface/product/filter";
import { IResProduct, IResSettingsProduct } from "../interface/product/product";
import { apiService } from "./apiService";

export const productService = {
  getListProduct: (query: string) =>
    apiService.get<IResProduct>(
      `${urls.products}/product/${query ? `?${query}` : ""}`
    ),
  searchGetAny: (query: string) =>
    apiService.get<IResProduct>(
      `${urls.products}/search/${query ? `?${query}` : ""}`
    ),

  getSettingsProduct: () =>
    apiService.get<IResSettingsProduct>(`${urls.products}/settings/`),
  getProductCategory: (query: string) =>
    apiService.get<IResCategory>(
      `${urls.products}/category/${query ? `?${query}` : ""}`
    ),
  getProductBrand: (query: string) =>
    apiService.get<IResBrand>(
      `${urls.products}/brand/${query ? `?${query}` : ""}`
    ),
  getProductModel: (query: string) =>
    apiService.get<IResModel>(
      `${urls.products}/model/${query ? `?${query}` : ""}`
    ),
  getFilterProductField: (query: string) =>
    apiService.get<IFilter>(
      `${urls.products}/filter/${query ? `?${query}` : ""}`
    ),
  updateSettingsProduct: (data: IResSettingsProduct) =>
    apiService.patch<IResSettingsProduct>(`${urls.products}/settings/update/`, {
      data: data,
    }),
};
