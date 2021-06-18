import Api from "./api";

declare interface Credentials {
  email: string
  password:string
}

declare interface User {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  about: string;
  photo: string;
  //pius: Piu[];
  //likes: PiuLike[];
  //following: User[];
  //followers: User[];
  //favorites: Piu[]; 
}

type Token = string

export const SingIn = async (credentials: Credentials ) =>{
 try {
   const response =  await Api.post('/sessions/login/', credentials)
   const data = response.data
   const { token, user } = data 
  //storeToken(token) 
  localStorage.setItem("@piupiuwer:token", token)
  localStorage.setItem('@piupiuwer:user', user)
 } catch (error) {
   console.log(error)
 }
}

//export const storeToken = (token: Token) => {
 // window.localStorage.setItem('token', token)
//}

export const getToken = () => {
  return window.localStorage.getItem('token')
}