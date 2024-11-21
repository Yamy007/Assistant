export interface ICategory {
  id: number;
  name: string;
}
export interface IBrand {
  id: number;
  name: string;
}
export interface IModel {
  id: number;
  name: string;
  model: string;
}
export interface IResCategory {
  total_page: number;
  current_page: number;
  total_items: number;
  data: ICategory[];
}
export interface IResBrand {
  total_page: number;
  current_page: number;
  total_items: number;
  data: IBrand[];
}
export interface IResModel {
  total_page: number;
  current_page: number;
  total_items: number;
  data: IModel[];
}
