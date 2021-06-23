import React, { useContext } from "react"
import { createContext, useState } from "react"
import Api from "../../Services/api";
import { ICredentials, IAuthState, IAuthContextData }from "../Components/Interfaces/interfaces"

export const Context = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC <any> = ({children}) => {

  const [authenticated, setAuthenticated] = useState<IAuthState>(() => {
      const token = localStorage.getItem('@piupiuwer:token');
      const user = localStorage.getItem('@piupiuwer:user')

      if(user && token) {
        return{ token, user: JSON.parse(user)}
      }

      return {} as IAuthState;
  });

  const SingIn = async ({email, password}: ICredentials ) =>{
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
      localStorage.removeItem('@piupiuwer:user');
      localStorage.removeItem('@piupiuwer:token');
  
      setAuthenticated({} as IAuthState);
  }

    return (
      <Context.Provider value={{ authenticated, SingIn, Logout, user:authenticated.user, token:authenticated.token }} >
        { children }
      </Context.Provider>
    )  
}

export const useAuth = () => {
    const context = useContext(Context)
    return(context)
}