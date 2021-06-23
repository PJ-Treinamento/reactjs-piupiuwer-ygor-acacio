import React, {FormEvent, useState} from "react";
import Api from "../../Services/api";
import { Link } from "react-router-dom";
import LogoPiupiuwer from "../../Assets/Images/logo-PP.svg";
import Copyright from "../../Assets/Images/copyright.svg"

import * as S from "./styles"

const Register = () => {
  const [credentials, setCredentials] = useState({
    first_name:'',
    last_name:'',
    email:'',
    photo:'',
    about:'',
    password:'',
    username:''
  })
  
  const hendleFormSubmit = async (e:FormEvent) => {
    e.preventDefault()
    try {
      const RegisterResponse = await Api.post('/register', credentials,
    {headers: {authorization:Node}})
      console.log(RegisterResponse)
    } catch (error) {
      console.log(error)
    }
    
  }

  const HendleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const { name, value } = event.target
    setCredentials({
      ...credentials,
      [name] : value
    })
  }

  return (
      <S.RegisterScreen>
        <S.NavBar> 
        <S.LogoPiuPiuwer src={LogoPiupiuwer} alt="piupiuwer" />
      </S.NavBar>
      
      <form onSubmit={hendleFormSubmit}>
        <S.Section>
          <S.LoginBox>
            <S.Tittle> Faça seu Cadastro </S.Tittle>
            <label htmlFor="First_name">
              <S.RegisterInput
                widthInput={false}
                placeholder="Primeiro Nome:"
                name="first_name"
                type="text"
                value={credentials.first_name}
                onChange={HendleInputChange}
              />
            </label>
            <label htmlFor="Last_name">
              <S.RegisterInput
                widthInput={false}
                placeholder="Sobrenome:"
                name="last_name"
                type="text"
                value={credentials.last_name}
                onChange={HendleInputChange}
              />
            </label>
            <label htmlFor="Email">
              <S.RegisterInput
                widthInput={false}
                placeholder="Email"
                name="email"
                type="text"
                value={credentials.email}
                onChange={HendleInputChange}
              />
            </label>
            <label htmlFor="Photo">
              <S.RegisterInput
                widthInput={false}
                placeholder="Link da sua foto de perfil"
                name="photo"
                type="text"
                value={credentials.photo}
                onChange={HendleInputChange}
              />
            </label>
            <label htmlFor="About">
              <S.RegisterInput
                widthInput={false}
                placeholder="Bio"
                name="about"
                type="text"
                value={credentials.about}
                onChange={HendleInputChange}
              />
            </label>
            <label htmlFor="Password">
              <S.RegisterInput
                widthInput={false}
                placeholder="Senha"
                name="password"
                type="text"
                value={credentials.password}
                onChange={HendleInputChange}
              />
            </label>
            <label htmlFor="Username">
              <S.RegisterInput
                widthInput={false}
                placeholder="Username"
                name="username"
                type="text"
                value={credentials.username}
                onChange={HendleInputChange}
              />
            </label>
            <Link to="/"> 
              <S.Button type="submit">Cadastrar</S.Button >
            </Link>
          </S.LoginBox>
        </S.Section>
      </form>

      <S.Footer>
        <S.Copyright src={Copyright} alt="copyright" />
        <S.P  colorFooter={true} marginFooter sizeFooter >Copyright of Polijunior</S.P>
      </S.Footer>
      </S.RegisterScreen>
  )
}

export default Register;