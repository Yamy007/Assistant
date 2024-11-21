import { urls } from "../constant";
import { ILogin, IToken, IUser } from "../interface/auth/auth";
import { apiService } from "./apiService";

export const authService = {
  getMe: () => apiService.get<IUser>(`${urls.auth}/me/`),
  login: (data: ILogin) => apiService.post<IToken>(`${urls.auth}/login/`, data),
};
