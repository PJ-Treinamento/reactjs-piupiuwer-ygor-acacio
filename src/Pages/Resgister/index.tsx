import React from "react";
import LogoPiupiuwer from "../../Assets/Images/logo-PP.svg";
import Copyright from "../../Assets/Images/copyright.svg"
import * as S from "./styles"
import { FormEvent } from "react";
import Api from "../../Services/api";

const Register = () => {
  // const [credentials, setCredentials] = useState({
  //   first_name:'',
  //   last_name:'',
  //   email:'',
  //   photo:'',
  //   password:'',
  //   username:''
  // })
  
  // const hendleFormSubmit = async (e:FormEvent) => {
  //   e.preventDefault()
  //   await Api.post('/register', credentials,
  //   {headers: {authorization:Node}})
  // }

  // const HendleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
  //   const { name, value } = event.target
  //   setCredentials({
  //     ...credentials,
  //     [name] : value
  //   })
  // }

  return (
      <S.RegisterScreen>
        <S.NavBar> 
        <S.LogoPiuPiuwer src={LogoPiupiuwer} alt="piupiuwer" />
      </S.NavBar>
      
      {/* <form onSubmit={hendleFormSubmit}>
        <S.Section>
          <S.LoginBox>
            <S.Tittle> Faça seu Cadastro </S.Tittle>
            <label htmlFor="first_name">
              <S.FistNameInput
                placeholder="Primeiro Nome:"
                name="first_name"
                type="text"
                value={credentials.first_name}
                onChange={HendleInputChange}
              />
            </label>
            <label htmlFor="first_name">
              <S.LastNameInput
                placeholder="Sobrenome:"
                name="last_name"
                type="text"
                value={credentials.last_name}
                onChange={HendleInputChange}
              />
            </label>
            <label htmlFor="">
              <S.FistNameInput
                placeholder="Primeiro Nome:"
                name="first_name"
                type="text"
                value={credentials.first_name}
                onChange={HendleInputChange}
              />
            </label>
            <label htmlFor="first_name">
              <S.FistNameInput
                placeholder="Primeiro Nome:"
                name="first_name"
                type="text"
                value={credentials.first_name}
                onChange={HendleInputChange}
              />
            </label>
            <label htmlFor="first_name">
              <S.FistNameInput
                placeholder="Primeiro Nome:"
                name="first_name"
                type="text"
                value={credentials.first_name}
                onChange={HendleInputChange}
              />
            </label>

              <S.Button type="submit">Entrar</S.Button >
            
          </S.LoginBox>
        </S.Section>
      </form> */}

      <S.Footer>
        <S.Copyright src={Copyright} alt="copyright" />
        <S.P  colorFooter={true} marginFooter sizeFooter >Copyright of Polijunior</S.P>
      </S.Footer>
      </S.RegisterScreen>
  )
}

export default Register;