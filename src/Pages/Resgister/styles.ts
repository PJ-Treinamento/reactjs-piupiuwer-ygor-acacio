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

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block-end: 1.5rem;
`
export const Copyright = styled.img`
  width: 1.5rem;
`