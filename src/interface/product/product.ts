export interface IProduct {
  id: number;
  name: string;
  name_rus: string;
  brand: string;
  body: string;
  color: string;
  donor: string;
  engine: string;
  model: string;
  cross_oem: string;
  front_back: string;
  marking: string;
  oem: string;
  price: number;
  manufacturer: string;
  comment: string;
  image: string;
  category: string;
  car_brand: string;
  car_model: string;
  part_manufacture: string;
  new_used: string;
  is_active: boolean;
  is_guaranteed: boolean;
  left_right: string;
  storage: string;
  top_bottom: string;
  year: string;
  [key: string]: string | boolean | number;
}

export interface IResProduct {
  total_items: number;
  total_page: number;
  current_page: number;
  data?: IProduct[];
}

export interface ISettingsProduct {
  field: string;
  order: number;
  is_visible: boolean;
  system_order: number;
  type: string;
  value: Array<string | boolean>;
  description?: Array<string>;
}

export interface IResSettingsProduct {
  settings?: ISettingsProduct[];
}

export interface IData {
  id?: string;
  name?: string;
  name_rus?: string;
  brand?: string;
  model?: string;
  year?: string;
  donor?: string;
  body?: string;
  front_back?: string;
  left_right?: string;
  top_bottom?: string;
  color?: string;
  marking?: string;
  cross_oem?: string;
  oem?: string;
  manufacturer?: string;
  comment?: string;
  new_used?: string;
  price?: string;
  storage?: string;
  is_active?: string;
  is_guaranteed?: string;
  [key: string]: string | undefined;
}
