export interface IntNews{
    title: string;
    source: thisSource;
    content: string;
    description: string;
    urlToImage: string;
    url: string;
    author: string;
    name: string;
  }
    
    export interface thisSource{
    id: string;
    name: string;
  }




export interface userState{
  data: userInfo[];
  auth: boolean;
}
export interface userInfo{
    email:string;
    avatarUrl: string;
    nickname: string;
}