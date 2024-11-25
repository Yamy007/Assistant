import { urls } from "../constant";
import { ILogin, IToken, IUser, IRegister } from "../interface/auth/auth";
import { apiService,authApiSerivice , imageService} from "./apiService";

export const authService = {
  getMe: () => apiService.get<IUser>(`${urls.user}/me`),
  login: (data: ILogin) => authApiSerivice.post<IToken>(`${urls.auth}/login`, data),
  register: (data: IRegister) => authApiSerivice.post<IUser>(`${urls.user}/register`, data),
  profile: (data: any) => imageService.patch<IUser>(`${urls.user}/update/profile`, data),

};
