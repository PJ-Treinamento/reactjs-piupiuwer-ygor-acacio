import React from "react";
import LogoPiupiuwer from "../../Assets/Images/logo-PP.svg";
import Copyright from "../../Assets/Images/copyright.svg"
import * as S from "./styles"

function Register (){
  return (
      <S.RegisterScreen>
        <S.NavBar> 
        <S.LogoPiuPiuwer src={LogoPiupiuwer} alt="piupiuwer" />
      </S.NavBar>
       {/*
      <form onSubmit={hendleFormSubmit}>
        <S.Section>
          <S.LoginBox>
            <S.Tittle> Faça seu Cadastro </S.Tittle>
            <label htmlFor="email"></label>
              <S.LoginInput 
                widthInput={false}
                placeholder="Email:" 
                name ="email"
                type="text" 
                value={credentials.email}
                onChange={HandleInputChange} 
              />
            <label htmlFor="password"></label>
              <S.LoginInput           
                widthInput={true}
                placeholder="Senha:" 
                name ="password"
                type="text" 
                value={credentials.password}
                onChange={HandleInputChange}
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
      </form>*/}

      <S.Footer>
        <S.Copyright src={Copyright} alt="copyright" />
        <S.P  colorFooter={true} marginFooter sizeFooter >Copyright of Polijunior</S.P>
      </S.Footer>
      </S.RegisterScreen>
  )
}

export default Register;