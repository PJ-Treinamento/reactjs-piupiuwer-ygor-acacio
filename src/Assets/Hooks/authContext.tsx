import React from "react"
import { createContext, useState } from "react"
import Api from "../../Services/api";
import { Credentials, AuthState, AuthContextData }from "../Components/Interfaces/interfaces"

export const Context = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC <any> = ({children}) => {

  const [authenticated, setAuthenticated] = useState<AuthState>(() => {
      const token = localStorage.getItem('@piupiuwer:Token');
      const user = localStorage.getItem('@piupiuwer:user')

      if(user && token) {
        return{ token, user: JSON.parse(user)}
      }

      return {} as AuthState;
  });

  const SingIn = async ({email, password}: Credentials ) =>{
    const response =  await Api.post('/sessions/login/', {
      email,
      password,
    })
    const data = response.data

    const { token, user } = data
    localStorage.setItem("@piupiuwer:token", token)
    localStorage.setItem('@piupiuwer:user', JSON.stringify(user)) 

    setAuthenticated({ token, user}); 
    }

    const Logout = () => {
      localStorage.removeItem('@Project:user');
      localStorage.removeItem('@Project:token');
  
      setAuthenticated({} as AuthState);
  }

    return (
      <Context.Provider value={{ authenticated, SingIn, Logout}} >
        { children }
      </Context.Provider>
    )  
}
