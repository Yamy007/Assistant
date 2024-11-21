import { urls } from "../constant";
import {
  IBankAccount,
  ICreateBankAccount,
  ICreateTransactionCategory,
  IResCreateTransactionCategory,
  IResListBankAccount,
  IResTransaction,
  IResTransactionCategory,
} from "../interface/finance/finance";
import { IResSettingsProduct } from "../interface/product/product";

import { apiService } from "./apiService";

export const financeService = {
  getTransactionList: () =>
    apiService.get<IResTransaction>(`${urls.finance}/transaction/`),
  getSettingsTransaction: () =>
    apiService.get<IResSettingsProduct>(`${urls.finance}/settings/`),
  updateSettingsProduct: (data: IResSettingsProduct) =>
    apiService.patch<IResSettingsProduct>(`${urls.finance}/settings/update/`, {
      data: data,
    }),
  //new
  createBankAccount: (data: ICreateBankAccount) =>
    apiService.post<IBankAccount>(`${urls.finance}/bank_account/create/`, {
      data: data,
    }),
  getListBankAccount: () =>
    apiService.get<IResListBankAccount>(`${urls.finance}/bank_account/`),
  getListTransactionCategory: () =>
    apiService.get<IResTransactionCategory>(
      `${urls.finance}/transaction_category/`
    ),
  createCategoryTransaction: (data: ICreateTransactionCategory) =>
    apiService.post<IResCreateTransactionCategory>(
      `${urls.finance}/transaction_category/create/`,
      {
        data: data,
      }
    ),
};
