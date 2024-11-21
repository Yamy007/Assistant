export interface ITransaction {
  id: number;
  amount: number;
  counterparty: string;
  date: string;
  manager: number;
  account: number;
  category: number;
  comment: string | null;
  order: string | null;
  is_deleted: boolean;
  [key: string]: string | number | boolean | null;
}

export interface IResTransaction {
  total_items: number;
  total_page: number;
  current_page: number;
  data?: ITransaction[];
}

export interface IAccounts {
  name: string;
  total_income: number;
  total_expense: number;
  total_amount: number;
}
export interface IResFinanceInfo {
  total_income: number;
  total_expense: number;
  total_amount: number;
  accounts: IAccounts[];
}

export interface ICreateBankAccount {
  bank: string;
  name: string;
}

export interface IBankAccount {
  id: number;
  name: string;
  bank: string;
  currency: string;
  extra_info: any;
  is_active: boolean;
}

export interface IResListBankAccount {
  total_items: number;
  total_page: number;
  current_page: number;
  data: IBankAccount[];
}

export interface ITransactionCategory {
  id: number;
  name: string;
  comment: any;
  is_income: boolean;
  is_active: boolean;
  is_deleted: boolean;
}

export interface IResTransactionCategory {
  data: ITransactionCategory[];
}

export interface ICreateTransactionCategory {
  name: string;
  is_income: boolean;
}

export interface IResCreateTransactionCategory {
  id: number;
  name: string;
  comment: any;
  is_income: boolean;
  is_active: boolean;
  is_deleted: boolean;
}
