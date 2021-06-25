import React from "react";
import { Link } from "react-router-dom";
import LogoPiupiuwer from "../../Assets/Images/logo-PP.svg";
import Copyright from "../../Assets/Images/copyright.svg"

import * as S from "./styles"

const PasswordForgot = () => {
 return(
      <S.RegisterScreen>
        <S.NavBar> 
          <S.LogoPiuPiuwer src={LogoPiupiuwer} alt="piupiuwer" />
        </S.NavBar>

          <S.Section>
            <S.LoginBox>
              <S.Tittle> Em construção: tente se lembrar por enquanto</S.Tittle>
              <Link to="/"> 
                <S.Button type="submit">Voltar</S.Button >
              </Link>
            </S.LoginBox>
          </S.Section>

        <S.Footer>
          <S.Copyright src={Copyright} alt="copyright" />
          <S.P  colorFooter={true} marginFooter sizeFooter >Copyright of Polijunior</S.P>
        </S.Footer>
      </S.RegisterScreen>
 ) 
}

export default PasswordForgot