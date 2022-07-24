
    export interface thisSource{
    id: string;
    name: string;
  }




export interface userState{
  data: userInfo;
  auth: boolean;
}


export interface userInfo{
    email:string;
    avatarUrl: string;
    nickname: string;
}
export interface IPosts{
  nickname: string;
  value: string;
}
export interface NewsInfo{
author: string;
content:  string;
description: string;
publishedAt:  string;
source: Object
id: string;
name: string;
title:  string;
url: string;
urlToImage: string;
}