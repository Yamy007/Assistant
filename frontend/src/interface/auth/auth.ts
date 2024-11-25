export interface IProfile {
  id?:string,
  name:string,
  surname:string,
  avatar?:string,
}

export interface IUser {
  id: number | null;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  last_login: string;
  updated_at: string;
  created_at: string;
  email: string;
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
  email: string;
  password: string;
}


export interface IProfile {
  name:string,
  surname:string,
}
export interface IRegister {
  email: string;
  password: string;
  profile:IProfile
}
