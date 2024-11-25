import {IUser} from "../auth/auth"
export interface INote {
    id? : number,
    text?: string,
    title?: string,
    color?: string,
    owner?:IUser,
    created_at?:string
}


export interface IDaylik {
    id? : number,
    text?: string,
    owner?:IUser,
    status?:boolean,
    created_at?:string,
}

export interface IResNote { 
    id? : number,

    text?: string,
    title?: string,
    color?: string,
    owner?:IUser,
    created_at?:string
}


export interface IProject {
    id? : number,
    title?: string,
    description?: string,
    owner?:IUser,
    status?:boolean,
    created_at?:string,
}


export interface IProjectTask {
    text? : string,
    status?: boolean,
    created_at?:string,
}