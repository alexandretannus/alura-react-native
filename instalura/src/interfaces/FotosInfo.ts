import { ComentarioInfo } from "./ComentarioInfo";

export interface FotosInfo {
    id: string,
    postDate: Date,
    url: string,
    description: string,
    allowComments: boolean,
    likes: number,
    comments: number,
    userId: number,
    userName: string,
    userURL: string,
    comentarios: ComentarioInfo[]
  }