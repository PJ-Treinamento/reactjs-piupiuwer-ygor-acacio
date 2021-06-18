import styled from "styled-components";

interface idProps{
  widthInput:boolean
}
interface pProps{
  colorFooter:boolean
  marginFooter?:boolean 
  sizeFooter?: boolean
  cursorFooter?: boolean
}

export const LoginScreen = styled.div `
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  margin: 0rem;
  padding: 0%;
  background-color: rgba(149, 213, 178, 0.5);
`
export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(82, 183, 136, 1);
  padding: 0.8rem;
`

export const LogoPiuPiuwer = styled.img`
  width: 5rem;
  height: 5rem;
`

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 90vh;
`
export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(245, 243, 243, 1);
  border-radius: 0.8rem;
  min-width: 47rem;
  height: 50rem;
  box-shadow: 0.1rem 0.4rem rgb(159, 154, 154);

  

  @media (min-width: 1100px){
    min-width: 49rem;
  }
`
export const Tittle = styled.h2`
  margin-top: 1.5rem;
  font-size: 3.5rem;
  font-weight: normal;
  font-family: Roboto;

  @media (min-width: 1100px){
    font-size: 4,2rem;
  }
`

export const LoginInput = styled.input<idProps>`
  border-radius: 0.8rem;
  border-style: solid;
  border-width: 0.08rem;
  border-color: rgb(227, 227, 227);
  margin-block-end: ${props => props.widthInput ? '2.8rem' : '-3.5rem'};
  width: 40rem;
  height: 4rem;

  ::placeholder{
    font-size: 1.6rem;
    padding-left: 0.8rem;
    color: rgba(128, 126, 126, 1);
  }

  :focus{
    outline-width: 0;
  }

  @media (min-width: 1100px){
    width: 44rem;
    height: 5.4rem;
  }
`

export const Button = styled.button`
  width: 40rem;
  height: 4rem;
  border-radius: 0.8rem;
  border-style: none;
  background-color: rgba(45, 106, 79, 1);
  color:rgb(227, 227, 227);
  font-size: 2.4rem;
  cursor:pointer;

  :hover{
  background-color:rgb(32, 82, 60); ;
  }

  @media (min-width: 1100px){
    width: 44rem;
    height: 5.4rem;
    font-size: 3.0rem;
  }
` 
export const P = styled.p<pProps>`
  font-family: Roboto;
  font-size: 1.2rem;
  color: ${ props => props.colorFooter ? 'black' : 'rgba(128, 126, 126, 1)' };
  margin-left: ${ props => props.marginFooter ? '1rem': ''};
  cursor: ${ props => props.cursorFooter ? 'pointer' : ''};

  @media (min-width: 1100px){
    font-size: 1.6rem;
    font-size: ${ props => props.sizeFooter ? '1.4rem' :' '};
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block-end: 1.5rem;
`
export const Copyright = styled.img`
  width: 1.5rem;
`