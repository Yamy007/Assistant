export interface IFilter {
  id?: number[];
  name?: string[];
  name_rus?: string[];
  brand?: string[];
  model?: string[];
  donor?: string[];
  year?: string[];
  body?: string[];
  engine?: string[];
  top_bottom?: string[];
  front_back?: string[];
  left_right?: string[];
  color?: string[];
  marking?: string[];
  oem?: string[];
  manufacturer?: string[];
  new_used?: string[];
  price?: number[];
  storage?: string[];
  is_active?: boolean[];
  is_guaranteed?: boolean[];
  [key: string]: any[] | undefined;
}
