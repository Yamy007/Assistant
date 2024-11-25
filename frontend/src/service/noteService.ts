import { urls } from "../constant";
import { apiService,authApiSerivice , imageService} from "./apiService";
import {INote, IDaylik, IProject, IProjectTask} from "../interface/note/note"

export const noteService = {
  // getMe: () => apiService.get<IUser>(`${urls.user}/me`),
    createNote: (data:INote) => apiService.post<INote>(`${urls.note}/create`, data),
    updateNote: (id:any, data:INote) => apiService.patch<INote>(`${urls.note}/update/${id}`, data),
    listNote: () => apiService.get<INote[]>(`${urls.note}/list`),
    getNote: (id:any) => apiService.get<INote[]>(`${urls.note}/update/${id}`),
    createDayik: (data:IDaylik) => apiService.post<IDaylik>(`${urls.note}/create/daylik`, data),
    updateDayik: (id:any, data:IDaylik) => apiService.patch<IDaylik>(`${urls.note}/update/${id}/daylik`, data),
    listDayik: () => apiService.get<IDaylik[]>(`${urls.note}/list/daylik`),
    getDayik: (id:any) => apiService.get<IDaylik[]>(`${urls.note}/update/${id}/daylik`),
    createProject: (data: IProject) => apiService.post<IProject>(`${urls.note}/create/project`, data),
    getProject: (id:any) => apiService.get<IProject>(`${urls.note}/update/${id}/project`),
    getListProject: () => apiService.get<IProject>(`${urls.note}/create/project`),
    getListTask: (id:any) => apiService.get<IProjectTask[]>(`${urls.note}/create/task/${id}/project`),
    updateProject: (id:any, data:IProject) => apiService.patch<IProject>(`${urls.note}/update/${id}/project`, data),
    updateProjectTask: (id:any, data:IProjectTask) => apiService.patch<IProject>(`${urls.note}/update/${id}/project/task`, data),
    createTask: (id:any, data:IProjectTask) => apiService.post<IProject>(`${urls.note}/create/task/${id}/project`, data),
    listTask: () => apiService.get<IProject>(`${urls.note}/list/project/task`),

};
