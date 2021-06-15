import React from "react"; 
import "./style.css";
import LogoPiupiuwer from "../../Assets/Images/logo-PP.svg";
import Copyright from "../../Assets/Images/copyright.svg"

function Login (){
  return (
    <div className="loginScreem">
      <nav className="navBar" > 
        <img className="logoPiupiuwer" src={LogoPiupiuwer} alt="piupiuwer" />
      </nav>

      <section>
        <div className="loginBox">
          <h1> Faça seu login </h1>
          <label htmlFor="email"></label>
          <input className="inputLogin" id="email"placeholder="Email:" name ="email"type="text" />
          <label htmlFor="pasword"></label>
          <input className="inputLogin" id="pasword" placeholder="Senha:" name ="pasword"type="text" />
          <button type="submit">Enviar</button>
          <p>Esqueci minha senha</p>
          <p>Não tenho cadastro</p>
        </div>
      </section>

      <footer className="footer">
        <img id="copyright"src={Copyright} alt="copyright" />
        <p id="footer" >Copyright of Polijunior</p>
      </footer>
    </div>
  );

}
export default Login; 