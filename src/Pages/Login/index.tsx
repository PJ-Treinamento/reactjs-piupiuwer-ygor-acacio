import React, {FormEvent} from "react";

import "./style.css";
import LogoPiupiuwer from "../../Assets/Images/logo-PP.svg";
import Copyright from "../../Assets/Images/copyright.svg"
import { useState }from "react";
import { SingIn } from "../../Services/authentication";
import Api from "../../Services/api";



 function Login (){
  const [credentials, setCredentials] = useState({ email:'', password:'' })
  
  const hendleFormSubmit = async (e:FormEvent) => {
    e.preventDefault()
    console.log(credentials)
    await SingIn(credentials)
  }
   /*const hendleFormSubmit = async () =>{ 
   try {
      const user = await SingIn(credentials)
      Api.defaults.headers.authorization = `Bearer${user.token}`
      //storeToken(user.token)
    } catch (err) {
      alert('erro')
    }*/


  const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const { name, value } = event.target
    setCredentials({
      ...credentials,
      [name] : value
    })
  }

  return (
    <div className="loginScreem">
      <nav className="navBar" > 
        <img className="logoPiupiuwer" src={LogoPiupiuwer} alt="piupiuwer" />
      </nav>

      <form onSubmit={hendleFormSubmit}>
        <section>
          <div className="loginBox">
            <h1> Faça seu login </h1>
            <label htmlFor="email"></label>
            <input 
              className="inputLogin" 
              id="email"
              placeholder="Email:" 
              name ="email"
              type="text" 
              value={credentials.email}
              onChange={HandleInputChange} 
            />
            <label htmlFor="password"></label>
            <input 
              className="inputLogin" 
              id="password" 
              placeholder="Senha:" 
              name ="password"
              type="text" 
              value={credentials.password}
              onChange={HandleInputChange}
            />
            <button type="submit">Entrar</button>
            <p>Esqueci minha senha</p>
            <p>Não tenho cadastro</p>
          </div>
        </section>
      </form>

      <footer className="footer">
        <img id="copyright"src={Copyright} alt="copyright" />
        <p id="footer" >Copyright of Polijunior</p>
      </footer>
    </div>
  );

}
export default Login; 