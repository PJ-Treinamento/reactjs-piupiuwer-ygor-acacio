import React, {FormEvent, useState, useContext} from "react";
import { Context } from "../../Assets/Hooks/authContext";
import { Link } from "react-router-dom";
import LogoPiupiuwer from "../../Assets/Images/logo-PP.svg";
import Copyright from "../../Assets/Images/copyright.svg"

import * as S from "./styles"

const Login = () => {
  
  const {SingIn} = useContext(Context)
  const [credentials, setCredentials] = useState({ email:'', password:'' })
  
  const hendleFormSubmit = async (e:FormEvent) => {
    e.preventDefault()
    await SingIn(credentials)
  }

  const HendleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const { name, value } = event.target
    setCredentials({
      ...credentials,
      [name] : value
    })
  }

  return (
    <S.LoginScreen>
      <S.NavBar> 
        <S.LogoPiuPiuwer src={LogoPiupiuwer} alt="piupiuwer" />
      </S.NavBar>

      <form onSubmit={hendleFormSubmit}>
        <S.Section>
          <S.LoginBox>
            <S.Tittle> Faça seu login </S.Tittle>
            <label htmlFor="email"></label>
              <S.LoginInput 
                widthInput={false}
                placeholder="Email:" 
                name ="email"
                type="text" 
                value={credentials.email}
                onChange={HendleInputChange} 
              />
            <label htmlFor="password"></label>
              <S.LoginInput           
                widthInput={true}
                placeholder="Senha:" 
                name ="password"
                type="text" 
                value={credentials.password}
                onChange={HendleInputChange}
              />
              <S.Button type="submit">Entrar</S.Button >
            <Link to='/esquici-minha-senha'>
              <S.P colorFooter={false} cursorFooter >Esqueci minha senha</S.P>
            </Link>
            <Link to='/registrar' >
              <S.P colorFooter={false} cursorFooter >Não tenho cadastro</S.P>
            </Link>
            
          </S.LoginBox>
        </S.Section>
      </form>

      <S.Footer>
        <S.Copyright src={Copyright} alt="copyright" />
        <S.P  colorFooter={true} marginFooter sizeFooter >Copyright of Polijunior</S.P>
      </S.Footer>
    </S.LoginScreen>
  );

}
export default Login; 