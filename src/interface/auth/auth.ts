export interface IProfile {
  id: number;
  name: string;
  surname: string;
  city: string;
  updated_at: string;
  created_at: string;
}

export interface IUser {
  id: number | null;
  is_active: boolean;
  is_customer: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  is_verified_email: boolean;
  last_login: string;
  updated_at: string;
  created_at: string;
  bonuses: number;
  phone: string;
  profile: IProfile;
}

export interface IToken {
  access: string;
  refresh: string;
}

export interface IResToken {
  user: IUser | null;
}

export interface ILogin {
  phone: string;
  password: string;
}
