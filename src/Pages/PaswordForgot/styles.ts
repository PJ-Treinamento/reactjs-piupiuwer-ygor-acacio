import React from "react";
import styled from "styled-components";

interface pProps{
  colorFooter:boolean
  marginFooter?:boolean 
  sizeFooter?: boolean
  cursorFooter?: boolean
}

export const RegisterScreen = styled.div `
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

export const P = styled.p<pProps>`
  font-family: Roboto;
  font-size: 1.2rem;
  color: ${ props => props.colorFooter ? 'black' : 'rgba(128, 126, 126, 1)' };
  margin-left: ${ props => props.marginFooter ? '1rem': ''};
  cursor: ${ props => props.cursorFooter ? 'pointer' : ''};
  text-decoration:none;

  @media (min-width: 1100px){
    font-size: 1.6rem;
    font-size: ${ props => props.sizeFooter ? '1.4rem' :' '};
  }
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
  height: 60rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 1100px){
    min-width: 49rem;
  }
`

export const Tittle = styled.h2`
  margin-top: 1.5rem;
  font-size: 3.0rem;
  font-weight: normal;
  font-family: Roboto;
  width: 45rem;

  @media (min-width: 1100px){
    font-size: 4,2rem;
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
export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block-end: 1.5rem;
`

export const Copyright = styled.img`
  width: 1.5rem;
`