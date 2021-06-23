import React from "react";

export interface ICredentials{
  email: string
  password:string
}

export interface IPiu{
  id: string;
	user: User;
	likes: PiuLike[];
	text: string;
	created_at: Date;
	updated_at: Date;
}

interface PiuLike {
	id: string;
	user: User;
	piu: IPiu;
}

interface User{
  id: string;
	username: string;
	first_name: string;
	last_name: string;
	email: string;
	about: string;
	photo: string;
	pius: IPiu[];
	likes: PiuLike[];
	following: User[];
	followers: User[];
	favorites:IPiu[];
}

export interface IAuthState{
  token:string
  user:User
}

export interface IAuthContextData{
  authenticated:IAuthState
  SingIn:(cred:ICredentials) => Promise<any>
	Logout:any
	token:string
	user:User
}
